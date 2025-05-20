import { useState, useEffect } from "react";
import api from "../api";
import Bar from "../components/Bar";
import "../styles/About.css"; 


function About() {
    const members = [
      {
        name: "黃宇陽",
        role: "前端開發",
        description: "主要任務：前端開發",
        weeks: [
          "Week 1：規劃 UI 設計與初步畫面切版",
          "Week 2：資料夾與路由架構建置",
          "Week 3：連接 API 顯示資料",
        ],
        avatar: "/avatars/founder1.png",
      },
      {
        name: "游峻傑",
        role: "爬蟲程式",
        description: "主要任務：爬蟲程式",
        weeks: [
          "Week 1：購書資訊搜尋來源/誠品/金石堂爬蟲",
          "Week 2：完成爬蟲爬取結果與 JSON",
          "Week 3：提供爬蟲資料與後端",
        ],
        avatar: "/avatars/founder2.png",
      },
      {
        name: "林芊妤",
        role: "後端與資料庫",
        description: "主要任務：後端開發與資料庫設計",
        weeks: [
          "Week 1：設定架構",
          "Week 2：API 路由設計與測試",
          "Week 3：整合爬蟲功能與 API 及前端串接支援",
        ],
        avatar: "/avatars/founder3.png",
      },
    ];
  
    return (
      <div>
        <Bar />
        <div className="about-container">
          <div className="about-header">
            <div>
                <h1 className="project-title">找書雷達 BookRadar</h1>
            </div>
          </div>
  
          <section className="about-content-row">
            <div className="about-section">
                <h2>專案介紹</h2>
                <p>
                開發一個整合「線上書店價格」與「圖書館的館藏狀況」的資訊購書系統。使用者輸入書名或 ISBN，即可獲得：
                </p>
                <ul>
                <li>博客來、誠品和金石堂線上書店的比價</li>
                <li>哪裡圖書館可借閱該書</li>
                <li>是否建議購買或借書</li>
                </ul>
                <p>
                本專案以 Python 為主，整合爬蟲技術、API 使用、後端設計與前端的介面呈現，協助學生或讀者節省時間與成本。
                </p>
            </div>

            <div className="about-logo-container">
                <img src="/bookradar-logo.png" alt="BookRadar logo" className="about-logo" />
            </div>
            </section>
  
          <section className="about-section">
            <h2>成員介紹</h2>
            <div className="member-cards">
              {members.map((m, idx) => (
                <div key={idx} className="member-card">
                  <img src={m.avatar} alt={`${m.name} avatar`} className="founder-img" />
                  <h3>{m.name}　{m.role}</h3>
                  <p>{m.description}</p>
                  <ul>
                    {m.weeks.map((w, i) => (
                      <li key={i}>{w}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    );
  }
  
  export default About;
  