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
  seko: "bg-gradient-to-br from-blue-50/90 to-indigo-50/90 border-blue-200/60 text-blue-900 backdrop-blur-sm",
  team: "bg-gradient-to-br from-indigo-50/90 to-purple-50/90 border-indigo-200/60 text-indigo-900 backdrop-blur-sm",
  client: "bg-gradient-to-br from-emerald-50/90 to-teal-50/90 border-emerald-200/60 text-emerald-900 backdrop-blur-sm",
  "client-strong": "bg-gradient-to-br from-orange-50/90 to-amber-50/90 border-orange-200/60 text-orange-900 backdrop-blur-sm",
  placeholder: "bg-white/60 border-slate-200/60 text-slate-500 border-dashed backdrop-blur-sm",
  center: "bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 text-white border-transparent shadow-lg shadow-purple-500/30",
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
        "relative shrink-0 select-none",
        side === "left" ? "w-[220px]" : "w-[200px]",
        className,
      ].join(" ")}
    >
      <div className="absolute inset-0 rounded-full bg-gradient-to-b from-violet-300/30 via-purple-300/20 to-transparent blur-3xl" />
      <img
        src={src}
        alt={label}
        className="relative z-10 block h-auto w-full object-contain drop-shadow-[0_25px_40px_rgba(139,92,246,0.3)]"
      />
    </motion.div>
  );
}

function HeroSection() {

