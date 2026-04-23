import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  CircleDollarSign,
  ClipboardList,
  Camera,
  Scissors,
  Rocket,
  Users,
  FileText,
  CalendarDays,
} from "lucide-react";

const pinkMascot = "https://aplen-chen.github.io/picture/IP.png";
const purpleMascot = "https://aplen-chen.github.io/picture/boyip.png";

const phases = [
  {
    title: "第一階段：商務洽談與確立合作",
    tag: "諮詢期",
    steps: [
      {
        id: 1,
        node: "一次見面",
        left: { label: "Seko", text: "初步溝通，了解客戶基本盤。", tone: "seko" },
        right: { label: "客人", text: "提出諮詢需求。", tone: "client" },
        icon: Users,
      },
      {
        id: 2,
        node: "二次見面",
        left: { label: "Seko", text: "解答客戶諮詢，介紹公司情況，交付SOP陪跑細則。", tone: "seko" },
        right: { label: "客人", text: "深入了解公司與服務流程。", tone: "client" },
        icon: ClipboardList,
      },
      {
        id: 3,
        node: "三次見面",
        left: { label: "編導 / 負責人", text: "開始籌備項目。", tone: "team" },
        right: { label: "客戶 / 負責人", text: "確認合作，完成付款。", tone: "client-strong" },
        icon: CircleDollarSign,
      },
    ],
  },
  {
    title: "第二階段：賬號定位與內容策劃",
    tag: "籌備期",
    steps: [
      {
        id: 4,
        node: "付款7天後",
        left: { label: "編導 + Seko", text: "定位前會議:內部準備與初步溝通。", tone: "team" },
        right: { label: "客戶負責人", text: "參與定位前會議溝通。", tone: "client" },
        icon: Users,
      },
      {
        id: 5,
        node: "定位前會議結束7天後",
        left: { label: "編導 ", text: "定位會議，確認客戶定位。", tone: "team" },
        right: { label: "狀態", text: "參會討論並確認定位。", tone: "placeholder" },
        icon: FileText,
      },
      {
        id: 6,
        node: "定位會議結束2天內",
        left: { label: "編導", text: "輸出賬號策劃表，確定並交付4個選題。並約定拍攝時間", tone: "team" },
        right: { label: "客戶負責人", text: "確定策劃案與選題", tone: "client" },
        icon: CalendarDays,
      },
      {
        id: 7,
        node: "交付後1天內",
        left: { label: "編導", text: "輸出劇本框架與內容。", tone: "team" },
        right: { label: "客戶", text: "提出修改跟進。", tone: "client" },
        icon: FileText,
      },
      {
        id: 8,
        node: "劇本定稿",
        center: { label: "雙方共同", text: "共同確認劇本終稿。", tone: "center" },
        icon: CheckCircle2,
      },
    ],
  },
  {
    title: "第三階段：拍攝執行",
    tag: "落地期",
    steps: [
      {
        id: 9,
        node: "劇本定稿後預約3-5天後拍攝",
        left: { label: "團隊", text: "安排拍攝時間於人員（需提前3-5天預約後面的時間）。", tone: "team" },
        right: { label: "客戶", text: "確認檔期配合。", tone: "client" },
        icon: CalendarDays,
      },
      {
        id: 10,
        node: "拍攝前3天內",
        left: { label: "拍攝與編導", text: "溝通劇本細節，確定拍攝腳本內容。", tone: "team" },
        right: { label: "客戶", text: "等待拍攝/狀態。", tone: "client" },
        icon: Camera,
      },
    {
        id: 11,
        node: "拍攝前1天",
        left: { label: "編導", text: "確認拍攝時間地點無誤。", tone: "team" },
        right: { label: "客戶", text: "配合確認。", tone: "client" },
        icon: Camera,
      },
      {
        id: 12,
        node: "拍攝當天",
        left: { label: "拍攝團隊", text: "執行拍攝（通常3小時內完成5條劇本）。", tone: "team" },
        right: { label: "客戶", text: "按約定時間到場配合完成拍攝。", tone: "client" },
        icon: Camera,
      },
    ],
  },
  {
    title: "第四階段：後期交付與發佈",
    tag: "收尾期",
    steps: [
      {
        id: 13,
        node: "拍攝結束1天內",
        left: { label: "拍攝", text: "上傳素材並整理，通知剪輯和編導。", tone: "team" },
        icon: Scissors,
      },
      {
        id: 14,
        node: "素材整理後2天內",
        left: { label: "編導與剪輯", text: "溝通劇本剪輯細節；完成首條成片和範本交付。", tone: "team" },
        icon: Scissors,
      },
      {
        id: 15,
        node: "審片期",
        left: { label: "後期團隊", text: "根據回饋修改（首條成片享受無限次修改，第2條開始2次 / 條修改）。", tone: "team" },
        right: { label: "客戶", text: "審閱視頻並提出修改意見。", tone: "client" },
        icon: FileText,
      },
      {
        id: 16,
        node: "發佈期",
        left: { label: "編導和文員", text: "給予發佈文案，同步進度跟進提醒。", tone: "team" },
        right: { label: "客戶", text: "發佈首條影片。", tone: "client-strong" },
        icon: Rocket,
      },
      {
        id: 17,
        node: "完結",
        center: { label: "雙方共同", text: "完成交付閉環。", tone: "center" },
        icon: CheckCircle2,
      },
    ],
  },
];

const allSteps = phases.flatMap((phase) =>
  phase.steps.map((step) => ({ ...step, phaseTitle: phase.title, phaseTag: phase.tag })),
);

const toneClass = {
  seko: "bg-gradient-to-br from-purple-100/95 to-purple-200/95 border-purple-300/70 text-purple-900 backdrop-blur-sm",
  team: "bg-gradient-to-br from-purple-100/95 to-purple-200/95 border-purple-300/70 text-purple-900 backdrop-blur-sm",
  client: "bg-gradient-to-br from-pink-100/95 to-pink-200/95 border-pink-300/70 text-pink-900 backdrop-blur-sm",
  "client-strong": "bg-gradient-to-br from-pink-200/95 to-pink-300/95 border-pink-400/70 text-pink-950 backdrop-blur-sm",
  placeholder: "bg-white/80 border-purple-200/60 text-purple-500 border-dashed backdrop-blur-sm",
  center: "bg-gradient-to-r from-[#371D4F] via-purple-700 to-[#E40046] text-white border-transparent shadow-lg shadow-purple-500/40",
};

function getProgress(activeStep) {
  if (!activeStep) return 0;
  return (activeStep / allSteps.length) * 100;
}

function runSanityChecks() {
  console.assert(allSteps.length === 17, "步驟總數應為17");
  console.assert(getProgress(9) === 50, "第9步進度應為50%");
  console.assert(getProgress(null) === 0, "未啟動步驟時進度應為0");
}

runSanityChecks();

function MascotSprite({ src, label, side = "left", className = "" }) {
  return (
    <motion.div
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      className={[
        "relative shrink-0 select-none w-full",
        className,
      ].join(" ")}
    >
      <div className={`absolute inset-0 rounded-full bg-gradient-to-b blur-xl md:blur-3xl ${
        side === "left"
          ? "from-pink-300/40 via-pink-400/30 to-transparent"
          : "from-purple-300/40 via-purple-400/30 to-transparent"
      }`} />
      <img
        src={src}
        alt={label}
        className={`relative z-10 block h-auto w-full object-contain ${
          side === "left"
            ? "drop-shadow-[0_15px_25px_rgba(228,0,70,0.35)] md:drop-shadow-[0_25px_40px_rgba(228,0,70,0.35)]"
            : "drop-shadow-[0_15px_25px_rgba(55,29,79,0.35)] md:drop-shadow-[0_25px_40px_rgba(55,29,79,0.35)]"
        }`}
      />
    </motion.div>
  );
}

function Card({ item, active, muted, align = "left" }) {
  if (!item) return <div className="hidden" />;
  const isCenter = item.tone === "center";

  return (
    <motion.div
      whileHover={{ scale: isCenter ? 1 : 1.02, y: -2 }}
      className={[
        "group relative rounded-2xl md:rounded-[28px] border-2 p-3 md:p-6 shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300",
        toneClass[item.tone],
        active ? "scale-[1.03] shadow-[0_20px_60px_rgba(139,92,246,0.3)] ring-2 ring-violet-400/50" : "",
        muted ? "opacity-40 saturate-50" : "opacity-100",
        align === "left" ? "mr-4 md:mr-12" : "ml-4 md:ml-12",
        isCenter ? "overflow-hidden" : "",
      ].join(" ")}
    >
      {isCenter ? (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.4),transparent_50%)]" />
      ) : null}

      <div className="relative z-10">
        <div
          className={`mb-2 md:mb-3 inline-flex rounded-full px-2.5 md:px-4 py-1 md:py-1.5 text-[10px] md:text-sm font-extrabold tracking-wider ${
            isCenter ? "bg-white/30 text-white shadow-lg" : "bg-white/95 text-purple-800 shadow-sm"
          }`}
        >
          {item.label}
        </div>
        <p className={`text-xs md:text-[17px] leading-relaxed font-semibold ${isCenter ? "text-white font-bold" : "text-purple-900"}`}>
          {item.text}
        </p>
      </div>
    </motion.div>
  );
}

function StepRow({ step, index, activeStep, setActiveStep }) {
  const isActive = activeStep === step.id;
  const isMuted = activeStep !== null && activeStep !== step.id;
  const Icon = step.icon || CircleDollarSign;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="relative"
      onMouseEnter={() => setActiveStep(step.id)}
      onMouseLeave={() => setActiveStep(null)}
    >
      <div
        className={[
          "relative grid items-center gap-3 md:gap-6 grid-cols-[minmax(0,1fr)_60px_minmax(0,1fr)] md:grid-cols-[minmax(0,1fr)_140px_minmax(0,1fr)]",
          activeStep !== null && activeStep !== step.id ? "opacity-50" : "opacity-100",
        ].join(" ")}
      >
        {!step.center ? (
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card item={step.left} active={isActive} muted={isMuted} align="left" />
          </motion.div>
        ) : (
          <div />
        )}

        <div className="relative flex min-h-[100px] md:min-h-[160px] items-center justify-center">
          <div
            className={`absolute left-1/2 top-0 h-full w-1.5 md:w-2 -translate-x-1/2 rounded-full transition-all duration-500 ${
              isActive
                ? "bg-gradient-to-b from-[#371D4F] via-purple-600 to-[#E40046] shadow-[0_0_30px_rgba(228,0,70,0.6)]"
                : "bg-gradient-to-b from-purple-200 to-purple-300"
            }`}
          />

          {step.left && !step.center ? (
            <div className="pointer-events-none absolute left-[calc(50%-120px)] md:left-[calc(50%-260px)] right-1/2 top-1/2 -translate-y-1/2">
              <div
                className={`relative h-0.5 border-t-[2px] md:border-t-[3px] border-dashed transition-all duration-500 ${
                  isActive ? "border-purple-500" : "border-purple-300"
                }`}
              >
                <div
                  className={`absolute -right-1 md:-right-1.5 -top-[5px] md:-top-[7px] h-0 w-0 border-b-[6px] md:border-b-[8px] border-l-[8px] md:border-l-[11px] border-t-[6px] md:border-t-[8px] border-b-transparent border-t-transparent transition-all duration-500 ${
                    isActive ? "border-l-purple-500" : "border-l-purple-300"
                  }`}
                />
              </div>
            </div>
          ) : null}

          {step.right && !step.center ? (
            <div className="pointer-events-none absolute left-1/2 right-[calc(50%-120px)] md:right-[calc(50%-260px)] top-1/2 -translate-y-1/2">
              <div
                className={`relative h-0.5 border-t-[2px] md:border-t-[3px] border-dashed transition-all duration-500 ${
                  isActive ? "border-pink-500" : "border-pink-300"
                }`}
              >
                <div
                  className={`absolute -left-1 md:-left-1.5 -top-[5px] md:-top-[7px] h-0 w-0 border-b-[6px] md:border-b-[8px] border-r-[8px] md:border-r-[11px] border-t-[6px] md:border-t-[8px] border-b-transparent border-t-transparent transition-all duration-500 ${
                    isActive ? "border-r-pink-500" : "border-r-pink-300"
                  }`}
                />
              </div>
            </div>
          ) : null}

          <motion.div
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ duration: 0.6 }}
            className={`relative z-10 flex h-14 w-14 md:h-24 md:w-24 flex-col items-center justify-center rounded-full border-[3px] md:border-[5px] bg-white p-2 md:p-3 text-center shadow-xl transition-all duration-500 ${
              isActive
                ? "scale-115 border-[#E40046] shadow-[0_0_40px_rgba(228,0,70,0.5)]"
                : "border-purple-300 shadow-purple-300/50"
            }`}
          >
            <Icon className={`mb-0.5 md:mb-1.5 h-3 w-3 md:h-5 md:w-5 transition-colors duration-500 ${isActive ? "text-[#E40046]" : "text-purple-500"}`} />
            <span className="text-[8px] md:text-[11px] font-bold tracking-wider text-purple-600">STEP {step.id}</span>
          </motion.div>

          <div className="absolute bottom-full left-1/2 mb-2 md:mb-4 w-24 md:w-40 -translate-x-1/2 text-center text-[10px] md:text-xs font-semibold leading-4 md:leading-5 text-purple-700">
            {step.node}
          </div>
        </div>

        {!step.center ? (
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card item={step.right} active={isActive} muted={isMuted} align="right" />
          </motion.div>
        ) : (
          <div />
        )}

        {step.center ? (
          <div className="pointer-events-none absolute inset-x-0 top-1/2 flex -translate-y-1/2 justify-center">
            <div className="w-[90%] md:w-[38rem]">
              <Card item={step.center} active={isActive} muted={isMuted} align="center" />
            </div>
          </div>
        ) : null}
      </div>
    </motion.div>
  );
}

export default function App() {
  const [activeStep, setActiveStep] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const stepProgress = useMemo(() => getProgress(activeStep), [activeStep]);

  // 合并滚动进度和步骤进度
  const progress = useMemo(() => {
    return Math.max(scrollProgress, stepProgress);
  }, [scrollProgress, stepProgress]);

  useEffect(() => {
    const onLeave = () => setActiveStep(null);
    window.addEventListener("scroll", onLeave, { passive: true });
    return () => window.removeEventListener("scroll", onLeave);
  }, []);

  // 添加滚动进度监听
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const scrollableHeight = documentHeight - windowHeight;
      const scrollPercentage = scrollableHeight > 0 ? (scrollTop / scrollableHeight) * 100 : 0;
      setScrollProgress(scrollPercentage);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // 初始化
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="fixed inset-0 bg-[url('https://aplen-chen.github.io/picture/bjt2.png')] bg-cover bg-center bg-no-repeat" />

      <div className="relative mx-auto max-w-[1280px] px-4 md:px-8 py-6 md:py-12">
        <div className="relative pt-24 md:pt-36">
          {/* 左側小精靈 */}
          <div className="absolute top-16 md:top-0 -left-2 md:left-8 z-40 w-28 md:w-[220px]">
            <MascotSprite src={pinkMascot} label="女IP角色" side="left" />
          </div>

          {/* 右側小精靈 */}
          <div className="absolute top-16 md:top-0 -right-2 md:right-8 z-40 w-28 md:w-[200px]">
            <MascotSprite src={purpleMascot} label="男IP角色" side="right" />
          </div>

          <section className="relative rounded-3xl md:rounded-[44px] border-2 border-white/40 bg-white/85 px-4 md:px-12 py-6 md:py-14 shadow-[0_32px_80px_rgba(55,29,79,0.25)] backdrop-blur-xl">
            <div className="pointer-events-none absolute left-0 right-0 top-0 h-32 md:h-48 bg-gradient-to-b from-purple-100/40 via-transparent to-transparent" />

            {/* 标题区域 */}
            <div className="mb-6 md:mb-10">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center text-xl md:text-4xl font-black leading-tight tracking-tight"
              >
                <span className="bg-gradient-to-r from-[#371D4F] via-purple-800 to-[#371D4F] bg-clip-text text-transparent">
                  獨角獸客戶業務交付
                </span>
                <span className="ml-2 md:ml-3 inline-block bg-gradient-to-r from-purple-600 via-[#E40046] to-pink-600 bg-clip-text text-transparent drop-shadow-sm">
                  SOP圖
                </span>
              </motion.h1>
            </div>

          <div className="sticky top-0 z-30 -mx-4 md:-mx-12 mb-6 md:mb-10 rounded-2xl md:rounded-[32px] border-2 border-purple-200/60 bg-gradient-to-r from-white/95 via-purple-50/40 to-white/95 px-4 md:px-8 py-3 md:py-5 shadow-[0_8px_32px_rgba(55,29,79,0.2)] backdrop-blur-xl">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 md:gap-4 mb-3">
              <div className="flex items-center justify-between w-full md:w-auto gap-2">
                <h2 className="bg-gradient-to-r from-[#371D4F] via-purple-700 to-[#371D4F] bg-clip-text text-xl md:text-3xl font-black tracking-tight text-transparent">流程圖</h2>
                <p className="text-[10px] md:text-sm font-medium text-purple-700 md:hidden">從諮詢確認到交付完結的完整路徑</p>
              </div>
              <p className="hidden md:block text-sm font-medium text-purple-700">從諮詢確認到交付完結的完整路徑</p>
              <div className="flex items-center gap-3 md:gap-6 text-xs md:text-sm font-bold text-purple-700">
                <div className="flex items-center gap-1.5 md:gap-2.5">
                  <span className="h-2 w-2 md:h-3 md:w-3 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 shadow-lg shadow-purple-500/30" />公司團隊
                </div>
                <div className="flex items-center gap-1.5 md:gap-2.5">
                  <span className="h-2 w-2 md:h-3 md:w-3 rounded-full bg-gradient-to-br from-purple-300 to-purple-400 shadow-lg shadow-purple-400/30" />時間軸
                </div>
                <div className="flex items-center gap-1.5 md:gap-2.5">
                  <span className="h-2 w-2 md:h-3 md:w-3 rounded-full bg-gradient-to-br from-pink-400 to-[#E40046] shadow-lg shadow-pink-500/30" />客戶
                </div>
              </div>
            </div>
            <div className="h-3 md:h-4 overflow-hidden rounded-full bg-gradient-to-r from-purple-200 to-purple-300 shadow-inner">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-[#371D4F] via-purple-600 to-[#E40046] shadow-lg shadow-purple-500/50"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </div>
          </div>

          <div className="space-y-10 md:space-y-16">
            {phases.map((phase, phaseIndex) => (
              <div key={phase.title} className="relative">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="sticky top-3 md:top-5 z-20 mb-6 md:mb-10 flex justify-center"
                >
                  <div className="rounded-full border-2 border-purple-200/80 bg-gradient-to-r from-white/95 via-purple-50/60 to-white/95 px-4 md:px-7 py-2 md:py-3.5 shadow-[0_8px_32px_rgba(55,29,79,0.25)] backdrop-blur-xl">
                    <span className="mr-2 md:mr-4 text-xs md:text-sm font-black tracking-widest text-[#E40046]">0{phaseIndex + 1}</span>
                    <span className="text-sm md:text-base font-black text-[#371D4F]">{phase.title}</span>
                    <span className="ml-2 md:ml-4 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 px-2 md:px-4 py-1 md:py-1.5 text-[10px] md:text-xs font-bold text-purple-700 shadow-sm">
                      {phase.tag}
                    </span>
                  </div>
                </motion.div>

                <div className="space-y-8 md:space-y-12">
                  {phase.steps.map((step, stepIndex) => (
                    <StepRow
                      key={step.id}
                      step={step}
                      index={stepIndex}
                      activeStep={activeStep}
                      setActiveStep={setActiveStep}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
          </section>
      </div>
    </div>
    </div>
  );
}