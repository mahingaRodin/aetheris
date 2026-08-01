"use client";

import { useEffect, useRef } from "react";

export function HeroShader() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl =
      canvas.getContext("webgl", { alpha: false, antialias: false }) ||
      canvas.getContext("experimental-webgl");
    if (!gl || !(gl instanceof WebGLRenderingContext)) return;

    const syncSize = () => {
      const w = canvas.clientWidth || 1280;
      const h = canvas.clientHeight || 720;
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
    };

    const resizeObserver = new ResizeObserver(syncSize);
    resizeObserver.observe(canvas);
    syncSize();

    const vs = `
      attribute vec2 a_position;
      varying vec2 v_texCoord;
      void main() {
        v_texCoord = a_position * 0.5 + 0.5;
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

    const fs = `
      precision highp float;
      uniform float u_time;
      uniform vec2 u_resolution;
      uniform vec2 u_mouse;
      varying vec2 v_texCoord;

      void main() {
        vec2 uv = v_texCoord;
        vec2 p = (gl_FragCoord.xy * 2.0 - u_resolution.xy) / min(u_resolution.x, u_resolution.y);

        vec3 color = vec3(0.039, 0.039, 0.039);

        vec2 grid_uv = uv * 40.0;
        vec2 grid = abs(fract(grid_uv - 0.5) - 0.5) / fwidth(grid_uv);
        float line = min(grid.x, grid.y);
        float grid_pattern = 1.0 - smoothstep(0.0, 0.05, line);
        color += grid_pattern * 0.03;

        for (float i = 0.0; i < 20.0; i++) {
          float t = u_time * 0.2 + i * 44.55;
          vec2 pos = vec2(sin(t), cos(t * 0.8)) * 0.8;
          float dist = length(p - pos);
          float particle = 0.002 / dist;
          color += vec3(0.83, 0.68, 0.21) * particle * (0.5 + 0.5 * sin(u_time + i));
        }

        float m_dist = length(uv - u_mouse / u_resolution);
        color += vec3(0.83, 0.68, 0.21) * (1.0 - smoothstep(0.0, 0.4, m_dist)) * 0.05;

        gl_FragColor = vec4(color, 1.0);
      }
    `;

    const createShader = (type: number, source: string) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      return shader;
    };

    const program = gl.createProgram();
    if (!program) return;

    const vertexShader = createShader(gl.VERTEX_SHADER, vs);
    const fragmentShader = createShader(gl.FRAGMENT_SHADER, fs);
    if (!vertexShader || !fragmentShader) return;

    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    gl.useProgram(program);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW,
    );

    const position = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(program, "u_time");
    const uRes = gl.getUniformLocation(program, "u_resolution");
    const uMouse = gl.getUniformLocation(program, "u_mouse");

    let mouse = { x: canvas.width / 2, y: canvas.height / 2 };
    let frameId = 0;
    let active = true;

    const onMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      const nx = (event.clientX - rect.left) / rect.width;
      const ny = 1.0 - (event.clientY - rect.top) / rect.height;
      mouse = { x: nx * canvas.width, y: ny * canvas.height };
    };

    window.addEventListener("mousemove", onMouseMove);

    const render = (t: number) => {
      if (!active) return;
      gl.viewport(0, 0, canvas.width, canvas.height);
      if (uTime) gl.uniform1f(uTime, t * 0.001);
      if (uRes) gl.uniform2f(uRes, canvas.width, canvas.height);
      if (uMouse) gl.uniform2f(uMouse, mouse.x, mouse.y);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      frameId = requestAnimationFrame(render);
    };

    frameId = requestAnimationFrame(render);

    return () => {
      active = false;
      cancelAnimationFrame(frameId);
      window.removeEventListener("mousemove", onMouseMove);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full opacity-40 mix-blend-screen"
      aria-hidden
    />
  );
}
