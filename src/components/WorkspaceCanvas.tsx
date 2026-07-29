"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MousePointer, Type, Paintbrush, Hand, ZoomIn, Eye, EyeOff, Lock, User, Briefcase, Mail, MapPin, Award } from "lucide-react";

const Github = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = ({ size = 18, className }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);


interface WorkspaceCanvasProps {
  zoomLevel: number;
  setZoomLevel: React.Dispatch<React.SetStateAction<number>>;
  clearTrigger?: number;
}

export default function WorkspaceCanvas({ zoomLevel, setZoomLevel, clearTrigger }: WorkspaceCanvasProps) {
  // Tool state
  const [activeTool, setActiveTool] = useState<"select" | "text" | "brush" | "hand" | "zoom">("select");
  const [zoomMode, setZoomMode] = useState<"in" | "out">("in");

  // Synchronize dynamic File -> New Canvas Project clears
  useEffect(() => {
    if (clearTrigger && clearTrigger > 0) {
      setEditableName("Amit Prajapati");
      setEditableRole("Full Stack Developer");
      setEditableDescription(
        "I build scalable, robust web systems and fluid user interfaces. Specializing in connecting optimized MongoDB/Node backends with custom high-fidelity React architectures. Crafted with a premium touch for the Adobe engineering team."
      );
      setPaintedElements({});
      setSelectedLayer(null);
      clearCanvas();
      setPanOffset({ x: 0, y: 0 });
      setZoomLevel(1.0);
    }
  }, [clearTrigger]);
  
  // Brush drawing states & handlers
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);

  // Layer visibility state
  const [layers, setLayers] = useState({
    avatar: true,
    bio: true,
    stats: true,
    socials: true,
  });

  // Active Selected Layer (Photoshop bounding box highlight)
  const [selectedLayer, setSelectedLayer] = useState<"avatar" | "bio" | "stats" | "socials" | null>(null);

  // Editable text states (Photoshop Text Layer edit tool)
  const [editableName, setEditableName] = useState("Amit Prajapati");
  const [editableRole, setEditableRole] = useState("Full Stack Developer");
  const [editableDescription, setEditableDescription] = useState(
    "I build scalable, robust web systems and fluid user interfaces. Specializing in connecting optimized MongoDB/Node backends with custom high-fidelity React architectures. Crafted with a premium touch for the Adobe engineering team."
  );
  const [editingField, setEditingField] = useState<"name" | "role" | "description" | null>(null);

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX - rect.left) * (canvas.width / rect.width);
    const y = (e.clientY - rect.top) * (canvas.height / rect.height);
    
    ctx.beginPath();
    ctx.moveTo(x, y);
    setIsDrawing(true);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX - rect.left) * (canvas.width / rect.width);
    const y = (e.clientY - rect.top) * (canvas.height / rect.height);
    
    ctx.lineTo(x, y);
    ctx.strokeStyle = "#ef4444"; // Adobe Red
    ctx.lineWidth = 4;
    ctx.lineCap = "round";
    ctx.stroke();
  };

  const startDrawingTouch = (e: React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas || e.touches.length === 0) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const rect = canvas.getBoundingClientRect();
    const touch = e.touches[0];
    const x = (touch.clientX - rect.left) * (canvas.width / rect.width);
    const y = (touch.clientY - rect.top) * (canvas.height / rect.height);
    
    ctx.beginPath();
    ctx.moveTo(x, y);
    setIsDrawing(true);
  };

  const drawTouch = (e: React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing || e.touches.length === 0) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const rect = canvas.getBoundingClientRect();
    const touch = e.touches[0];
    const x = (touch.clientX - rect.left) * (canvas.width / rect.width);
    const y = (touch.clientY - rect.top) * (canvas.height / rect.height);
    
    ctx.lineTo(x, y);
    ctx.strokeStyle = "#ef4444";
    ctx.lineWidth = 4;
    ctx.lineCap = "round";
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      ctx?.clearRect(0, 0, canvas.width, canvas.height);
    }
  };

  // Brush painted elements tracker
  const [paintedElements, setPaintedElements] = useState<Record<string, boolean>>({});

  // Hand panning coordinates
  const [panOffset, setPanOffset] = useState({ x: 0, y: 0 });
  const [isPanning, setIsPanning] = useState(false);
  const [panStart, setPanStart] = useState({ x: 0, y: 0 });

  const toggleLayer = (layerKey: keyof typeof layers) => {
    setLayers((prev) => ({ ...prev, [layerKey]: !prev[layerKey] }));
    if (selectedLayer === layerKey) {
      setSelectedLayer(null);
    }
  };

  const handleElementClick = (elementId: string) => {
    if (activeTool === "brush") {
      setPaintedElements((prev) => ({
        ...prev,
        [elementId]: !prev[elementId],
      }));
    }
  };

  // Cursor selector based on active tool
  const getCursorClass = () => {
    switch (activeTool) {
      case "text":
        return "cursor-text";
      case "brush":
        return "cursor-crosshair";
      case "hand":
        return isPanning ? "cursor-grabbing" : "cursor-grab";
      case "zoom":
        return "cursor-zoom-in";
      default:
        return "cursor-default";
    }
  };

  // Hand Pan Handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (activeTool !== "hand") return;
    setIsPanning(true);
    setPanStart({ x: e.clientX - panOffset.x, y: e.clientY - panOffset.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isPanning || activeTool !== "hand") return;
    setPanOffset({
      x: e.clientX - panStart.x,
      y: e.clientY - panStart.y,
    });
  };

  const handleMouseUp = () => {
    setIsPanning(false);
  };

  // Photoshop dashed bounding box layer wrapper
  const SelectionFrame = ({ 
    layerKey, 
    active, 
    children 
  }: { 
    layerKey: "avatar" | "bio" | "stats" | "socials"; 
    active: boolean; 
    children: React.ReactNode 
  }) => {
    const isSelected = selectedLayer === layerKey && activeTool === "select";
    return (
      <div
        onClick={(e) => {
          if (activeTool === "select" && active) {
            e.stopPropagation();
            setSelectedLayer(layerKey);
          }
        }}
        className={`relative transition-all duration-150 ${
          isSelected 
            ? "outline-2 outline-dashed outline-blue-500/80 rounded p-1.5 ring-2 ring-blue-500/20" 
            : ""
        }`}
      >
        {children}
        {isSelected && (
          <>
            {/* Resizing handles corner indicators */}
            <span className="absolute -top-1 -left-1 w-2 h-2 bg-white border border-blue-600 rounded-sm z-30 pointer-events-none" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-white border border-blue-600 rounded-sm z-30 pointer-events-none" />
            <span className="absolute -bottom-1 -left-1 w-2 h-2 bg-white border border-blue-600 rounded-sm z-30 pointer-events-none" />
            <span className="absolute -bottom-1 -right-1 w-2 h-2 bg-white border border-blue-600 rounded-sm z-30 pointer-events-none" />
            
            {/* Label handle tab */}
            <span className="absolute -top-5 left-1 text-[9px] bg-blue-600 text-white font-mono px-1 rounded shadow pointer-events-none capitalize z-30">
              {layerKey} layer
            </span>
          </>
        )}
      </div>
    );
  };

  return (
    <section id="about" className="relative flex flex-col lg:flex-row w-full bg-bg-app border-b border-border-theme h-auto lg:h-[650px] overflow-hidden select-none">
      {/* 1. LEFT TOOLBAR */}
      <div className="flex lg:flex-col justify-around lg:justify-start items-center p-2 bg-bg-panel border-b lg:border-b-0 lg:border-r border-border-theme gap-2 z-20">
        <div className="hidden lg:block text-[10px] text-text-muted font-mono mb-2 text-center uppercase tracking-wider">
          Tools
        </div>
        {[
          { id: "select", icon: <MousePointer size={18} />, tooltip: "Select Tool (V) - Click items/layers to select" },
          { id: "text", icon: <Type size={18} />, tooltip: "Text Tool (T) - Click text to edit in-place" },
          { id: "brush", icon: <Paintbrush size={18} />, tooltip: "Brush Tool (B) - Draw free-hand over photo" },
          { id: "hand", icon: <Hand size={18} />, tooltip: "Hand Tool (H) - Drag canvas to pan offset" },
          { id: "zoom", icon: <ZoomIn size={18} />, tooltip: "Zoom Tool (Z) - Click to zoom, Alt+Click to out" },
        ].map((tool) => (
          <button
            key={tool.id}
            onClick={() => {
              setActiveTool(tool.id as any);
              if (tool.id !== "select") {
                setSelectedLayer(null);
              }
              setEditingField(null);
            }}
            className={`p-2 rounded-md transition-all relative group cursor-pointer ${
              activeTool === tool.id
                ? "bg-red-600 text-white shadow-lg shadow-red-600/30"
                : "text-text-secondary hover:bg-hover-theme hover:text-text-primary"
            }`}
            title={tool.tooltip}
          >
            {tool.icon}
            {/* Tooltip */}
            <span className="absolute left-full ml-2 px-2 py-1 bg-bg-panel border border-border-theme text-[10px] rounded text-text-primary opacity-0 group-hover:opacity-100 transition-opacity hidden lg:block whitespace-nowrap z-35 pointer-events-none">
              {tool.tooltip}
            </span>
          </button>
        ))}
      </div>

      {/* 2. MAIN CANVAS AREA */}
      <div
        className={`flex-1 relative bg-bg-panel-darker overflow-hidden flex items-center justify-center p-4 min-h-[450px] md:min-h-0 ${getCursorClass()}`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onClick={(e) => {
          if (activeTool === "zoom") {
            e.stopPropagation();
            const isZoomOut = (zoomMode === "out" && !e.altKey) || (zoomMode === "in" && e.altKey) || e.shiftKey;
            if (isZoomOut) {
              setZoomLevel((prev) => Math.max(0.5, prev - 0.15));
            } else {
              setZoomLevel((prev) => Math.min(2.0, prev + 0.15));
            }
          } else if (activeTool === "select") {
            setSelectedLayer(null);
          }
        }}
      >
        {/* Document Frame */}
        <motion.div
          style={{
            scale: zoomLevel,
            x: panOffset.x,
            y: panOffset.y,
          }}
          className={`relative w-full max-w-3xl aspect-auto md:aspect-[1.6/1] bg-bg-panel border border-border-theme rounded-lg shadow-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8 justify-between items-center transition-all duration-300 ${
            activeTool === "zoom" ? "pt-16" : "pt-10"
          }`}
        >
          {/* Adobe Canvas Info Header */}
          <div className="absolute top-0 left-0 right-0 h-6 bg-bg-panel-darker border-b border-border-theme rounded-t-lg flex items-center justify-between px-3 text-[10px] text-text-muted font-mono z-25">
            <span>Amit_Portfolio_Draft_v1.psd @ {Math.round(zoomLevel * 100)}% (RGB/8)</span>
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-400 dark:bg-zinc-700"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-400 dark:bg-zinc-700"></span>
            </div>
          </div>

          {/* Photoshop Style Zoom Options Bar (rendered when zoom tool is active) */}
          {activeTool === "zoom" && (
            <div className="absolute top-6 left-0 right-0 h-8 bg-bg-panel border-b border-border-theme flex items-center px-3 gap-3 text-[10px] text-text-secondary font-mono z-20">
              <span className="font-bold flex items-center gap-1">
                <ZoomIn size={12} className="text-red-500" />
                Zoom Options:
              </span>
              <div className="flex gap-1 bg-bg-panel-darker p-0.5 rounded border border-border-theme">
                <button
                  onClick={() => setZoomMode("in")}
                  className={`px-2 py-0.5 rounded text-[9px] font-bold cursor-pointer ${
                    zoomMode === "in"
                      ? "bg-red-600 text-white font-bold"
                      : "hover:bg-hover-theme text-text-secondary"
                  }`}
                >
                  Zoom In (+)
                </button>
                <button
                  onClick={() => setZoomMode("out")}
                  className={`px-2 py-0.5 rounded text-[9px] font-bold cursor-pointer ${
                    zoomMode === "out"
                      ? "bg-red-600 text-white font-bold"
                      : "hover:bg-hover-theme text-text-secondary"
                  }`}
                >
                  Zoom Out (-)
                </button>
              </div>
              <span className="text-text-muted text-[8px] hidden sm:inline">Click canvas. Holding Alt/Option toggles mode.</span>
            </div>
          )}

          <AnimatePresence>
            {/* Left Content Column */}
            <div className="flex-1 flex flex-col gap-4 mt-4 w-full z-10">
              {/* Header Title Layer */}
              {layers.bio && (
                <SelectionFrame layerKey="bio" active={layers.bio}>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-1.5"
                  >
                    <div className="text-[10px] text-text-muted font-mono uppercase tracking-wider">
                      Layer 1: Header & Bio
                    </div>
                    
                    {/* Inline Name Editing */}
                    {editingField === "name" ? (
                      <input
                        type="text"
                        value={editableName}
                        onChange={(e) => setEditableName(e.target.value)}
                        onBlur={() => setEditingField(null)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") setEditingField(null);
                        }}
                        autoFocus
                        className="text-4xl md:text-5xl font-black bg-bg-panel border border-blue-500 rounded px-1.5 py-0.5 text-text-primary w-full focus:outline-none focus:ring-1 focus:ring-blue-500 font-sans"
                      />
                    ) : (
                      <h1
                        onClick={(e) => {
                          if (activeTool === "text") {
                            e.stopPropagation();
                            setEditingField("name");
                          } else {
                            handleElementClick("name");
                          }
                        }}
                        className={`text-4xl md:text-5xl font-black tracking-tight cursor-pointer transition-all duration-200 ${
                          paintedElements["name"] ? "text-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]" : "text-text-primary"
                        }`}
                      >
                        {editableName}
                      </h1>
                    )}

                    {/* Inline Role Editing */}
                    {editingField === "role" ? (
                      <input
                        type="text"
                        value={editableRole}
                        onChange={(e) => setEditableRole(e.target.value)}
                        onBlur={() => setEditingField(null)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") setEditingField(null);
                        }}
                        autoFocus
                        className="text-lg md:text-xl font-bold font-mono bg-bg-panel border border-blue-500 rounded px-1.5 py-0.5 text-text-secondary w-full focus:outline-none focus:ring-1 focus:ring-blue-500"
                      />
                    ) : (
                      <h2
                        onClick={(e) => {
                          if (activeTool === "text") {
                            e.stopPropagation();
                            setEditingField("role");
                          } else {
                            handleElementClick("role");
                          }
                        }}
                        className={`text-lg md:text-xl font-bold font-mono transition-all duration-200 cursor-pointer ${
                          paintedElements["role"] ? "text-red-400" : "text-text-secondary"
                        }`}
                      >
                        {editableRole}
                      </h2>
                    )}

                    {/* Inline Bio Editing */}
                    {editingField === "description" ? (
                      <textarea
                        value={editableDescription}
                        onChange={(e) => setEditableDescription(e.target.value)}
                        onBlur={() => setEditingField(null)}
                        rows={4}
                        autoFocus
                        className="text-sm bg-bg-panel border border-blue-500 rounded px-1.5 py-1 text-text-secondary w-full focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none font-sans leading-relaxed"
                      />
                    ) : (
                      <p
                        onClick={(e) => {
                          if (activeTool === "text") {
                            e.stopPropagation();
                            setEditingField("description");
                          } else {
                            handleElementClick("description");
                          }
                        }}
                        className={`text-sm leading-relaxed mt-2 cursor-pointer transition-all ${
                          paintedElements["description"] ? "text-text-primary bg-red-950/20 dark:bg-red-950/20 px-2 py-1 rounded border-l-2 border-red-500" : "text-text-secondary"
                        }`}
                      >
                        {editableDescription}
                      </p>
                    )}
                  </motion.div>
                </SelectionFrame>
              )}

              {/* Social Connections Layer */}
              {layers.socials && (
                <SelectionFrame layerKey="socials" active={layers.socials}>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex flex-wrap gap-3 mt-2"
                  >
                    <a
                      href="https://github.com/isamitprajapati"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-bg-panel-darker hover:bg-hover-theme text-xs transition-colors border border-border-theme"
                    >
                      <Github size={14} />
                      <span>GitHub</span>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/itsamitprajapati/"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-bg-panel-darker hover:bg-hover-theme text-xs transition-colors border border-border-theme"
                    >
                      <Linkedin size={14} className="text-blue-500 dark:text-blue-400" />
                      <span>LinkedIn</span>
                    </a>
                    <a
                      href="mailto:amitprj737@gmail.com"
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-bg-panel-darker hover:bg-hover-theme text-xs transition-colors border border-border-theme"
                    >
                      <Mail size={14} />
                      <span>Email</span>
                    </a>
                    <div className="flex items-center gap-1 px-3 py-1.5 rounded-md bg-bg-app text-text-muted text-xs font-mono border border-border-theme/40">
                      <MapPin size={12} />
                      <span>Mumbai, India</span>
                    </div>
                  </motion.div>
                </SelectionFrame>
              )}
            </div>

            {/* Right Column: Custom SVG Canvas Art / Stats */}
            <div className="flex flex-col items-center justify-center gap-4 w-full md:w-56 mt-4 md:mt-0 z-10">
              {/* Profile Image / Graphic Layer */}
              {layers.avatar && (
                <SelectionFrame layerKey="avatar" active={layers.avatar}>
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    onClick={(e) => {
                      if (activeTool !== "select") {
                        handleElementClick("avatar");
                      }
                    }}
                    className={`w-36 h-36 rounded-2xl border-2 overflow-hidden flex items-center justify-center bg-bg-panel-darker relative group cursor-pointer transition-all duration-300 select-none ${
                      activeTool === "brush"
                        ? "border-red-500 ring-2 ring-red-500/20"
                        : paintedElements["avatar"]
                        ? "border-red-500 bg-red-950/20"
                        : "border-border-theme hover:border-zinc-500"
                    }`}
                  >
                    {/* Real Portrait Image */}
                    <img
                      src="/images/amitprajapati.png"
                      alt="Amit Prajapati"
                      className="w-full h-full object-cover select-none pointer-events-none"
                    />

                    {/* Free-hand drawing canvas overlay */}
                    {activeTool === "brush" && (
                      <canvas
                        ref={canvasRef}
                        width={144}
                        height={144}
                        onMouseDown={startDrawing}
                        onMouseMove={draw}
                        onMouseUp={stopDrawing}
                        onMouseLeave={stopDrawing}
                        onTouchStart={startDrawingTouch}
                        onTouchMove={drawTouch}
                        onTouchEnd={stopDrawing}
                        className="absolute inset-0 w-full h-full z-25 cursor-crosshair touch-none"
                      />
                    )}

                    {/* UI corner marks */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 100 100">
                      <path d="M5 15V5H15" stroke="#ff0000" strokeWidth="2.5" />
                      <path d="M95 15V5H85" stroke="#ff0000" strokeWidth="2.5" />
                      <path d="M5 85V95H15" stroke="#ff0000" strokeWidth="2.5" />
                      <path d="M95 85V95H85" stroke="#ff0000" strokeWidth="2.5" />
                    </svg>

                    {/* Clear button for drawing */}
                    {activeTool === "brush" && (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          clearCanvas();
                        }}
                        className="absolute bottom-2 right-2 bg-bg-panel/90 border border-border-theme hover:bg-hover-theme rounded px-1.5 py-0.5 text-[9px] text-red-500 font-mono z-30 font-bold shadow-md cursor-pointer select-none pointer-events-auto"
                      >
                        Clear
                      </button>
                    )}

                    <div className="absolute inset-0 bg-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none z-10">
                      <span className="text-[10px] bg-bg-panel border border-border-theme px-2 py-0.5 rounded text-text-primary font-mono shadow-md">
                        {activeTool === "brush" ? "Draw Mode" : "Layer Selected"}
                      </span>
                    </div>
                  </motion.div>
                </SelectionFrame>
              )}

              {/* Stats Box Layer */}
              {layers.stats && (
                <SelectionFrame layerKey="stats" active={layers.stats}>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="w-full grid grid-cols-2 gap-2 text-center"
                  >
                    <div
                      onClick={() => handleElementClick("stat-exp")}
                      className={`p-2 rounded-lg border border-border-theme bg-bg-app flex flex-col justify-center cursor-pointer transition-all ${
                        paintedElements["stat-exp"] ? "border-red-500/50 bg-red-950/10 text-red-500 font-bold" : "text-text-secondary hover:border-zinc-500"
                      }`}
                    >
                      <span className="text-xl font-black text-text-primary">3+</span>
                      <span className="text-[9px] font-mono text-text-muted uppercase">Years Exp</span>
                    </div>
                    <div
                      onClick={() => handleElementClick("stat-projects")}
                      className={`p-2 rounded-lg border border-border-theme bg-bg-app flex flex-col justify-center cursor-pointer transition-all ${
                        paintedElements["stat-projects"] ? "border-red-500/50 bg-red-950/10 text-red-500 font-bold" : "text-text-secondary hover:border-zinc-500"
                      }`}
                    >
                      <span className="text-xl font-black text-text-primary">20+</span>
                      <span className="text-[9px] font-mono text-text-muted uppercase">Projects</span>
                    </div>
                  </motion.div>
                </SelectionFrame>
              )}
            </div>
          </AnimatePresence>
        </motion.div>
      </div>

      {/* 3. LAYERS PANEL (RIGHT) */}
      <div className="w-full lg:w-64 bg-bg-panel border-t lg:border-t-0 lg:border-l border-border-theme flex flex-col z-20 shrink-0">
        <div className="p-3 border-b border-border-theme flex items-center justify-between text-xs text-text-secondary font-bold uppercase tracking-wider">
          <span>Layers Stack</span>
          <Award size={14} className="text-text-muted" />
        </div>

        {/* Dynamic Layer List */}
        <div className="p-2 space-y-1.5 overflow-y-auto max-h-56 lg:max-h-none lg:flex-1">
          {[
            { key: "avatar", label: "Profile Avatar Graphic", icon: <User size={14} /> },
            { key: "bio", label: "Bio & Core Description", icon: <Briefcase size={14} /> },
            { key: "socials", label: "Social Link Badges", icon: <Linkedin size={14} /> },
            { key: "stats", label: "Professional Stat Cards", icon: <Award size={14} /> },
          ].map((layer) => {
            const isVisible = layers[layer.key as keyof typeof layers];
            const isSelected = selectedLayer === layer.key;
            return (
              <div
                key={layer.key}
                onClick={() => {
                  if (isVisible) {
                    setSelectedLayer(layer.key as any);
                    setActiveTool("select");
                  }
                }}
                className={`flex items-center justify-between p-2 rounded-md text-xs font-medium border cursor-pointer transition-colors ${
                  isSelected
                    ? "bg-blue-600/10 border-blue-500 text-text-primary font-bold"
                    : isVisible
                    ? "bg-bg-panel-darker border-border-theme text-text-primary hover:bg-hover-theme"
                    : "bg-bg-app/40 border-bg-app text-text-muted"
                }`}
              >
                <div className="flex items-center gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleLayer(layer.key as any);
                    }}
                    className={`p-1 rounded hover:bg-hover-theme transition-colors cursor-pointer ${
                      isVisible ? "text-red-500" : "text-text-muted"
                    }`}
                    title={isVisible ? "Hide Layer" : "Show Layer"}
                  >
                    {isVisible ? <Eye size={14} /> : <EyeOff size={14} />}
                  </button>
                  <span className="flex items-center gap-1.5 pointer-events-none">
                    <span className="text-text-muted">{layer.icon}</span>
                    <span className={isVisible ? "" : "line-through text-text-muted"}>{layer.label}</span>
                  </span>
                </div>
                <div className="text-[10px] text-text-muted font-mono">T</div>
              </div>
            );
          })}

          {/* Locked Background Layer */}
          <div className="flex items-center justify-between p-2 rounded-md text-xs font-medium border bg-bg-app/70 border-border-theme/65 text-text-muted">
            <div className="flex items-center gap-2">
              <div className="p-1 text-text-muted">
                <Lock size={12} />
              </div>
              <span>Workspace Canvas BG</span>
            </div>
            <span className="text-[9px] bg-bg-panel border border-border-theme px-1 py-0.5 rounded font-mono">RGB</span>
          </div>
        </div>

        {/* Workspace Help Footer */}
        <div className="p-3 border-t border-border-theme bg-bg-panel-darker text-[10px] text-text-muted leading-relaxed">
          <p className="font-mono uppercase text-text-secondary font-bold mb-1">Canvas Help</p>
          {activeTool === "brush" ? (
            <p className="text-red-500 font-bold">Brush tool active. Draw directly on the profile image card using mouse drag or touch swipes!</p>
          ) : activeTool === "text" ? (
            <p>Text tool active. Click on text elements (Name, Role, Bio) on the canvas to edit them directly.</p>
          ) : activeTool === "hand" ? (
            <p>Hand tool active. Click and drag on the canvas background to pan around.</p>
          ) : activeTool === "select" ? (
            <p>Select tool active. Click elements on the canvas or rows in the Layers list to select and show resizing outlines.</p>
          ) : (
            <p>Zoom tool active. Click to zoom in, hold Alt/Option and click to zoom out.</p>
          )}
        </div>
      </div>
    </section>
  );
}
