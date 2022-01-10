import React, { useState, useEffect } from "react";
import Header from "./Header";
import axios from "axios";
import "./Header.css";
import { renderMatches } from "react-router-dom";

function Container() {
  return (
    <div className="coin-app">
      <Header />

      <div className="blog">
        <div className="blog1">
          <img
            src={
              "https://static.doviz.com/thumbs/news/imf-gelismekte-olan-ekonomiler-fed-in-faiz-artisina-karsi-hazirlik-yapmali-1641810807_361x130.jpg"
            }
            alt=""
          />
          <h3 className="desc">Öne Çıkan Haberler</h3>
          <h1 className="title">
            IMF: Gelişmekte olan ekonomiler, Fed'in faiz artışına karşı hazırlık
            yapmalı
          </h1>
          <span class="time">7 saat önce</span>
          <div className="video">
            <iframe
              width="553"
              height="280"
              src={`https://www.youtube.com/embed/8xp-uRAloXk`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />
          </div>
        </div>
      </div>

      <div className="second-container">
        <div className="1">
          <h3 className="desc">GÜNDEM</h3>
          <h1 className="title1">Avro Bölgesi'nde işsizlik kasımda düştü</h1>
          <span class="time">7 saat önce</span>
        </div>
        <div className="2">
          <h3 className="desc">EMTİA</h3>
          <h1 className="title1">
            Emtia piyasasında yılın ilk haftasında yükseliş eğilimi hakim oldu
          </h1>

          <span class="time">7 saat önce</span>
        </div>
        <div className="3">
          <h3 className="desc">GÜNDEM</h3>
          <h1 className="title1">İşsizlik rakamları açıklandı</h1>
          <span class="time">7 saat önce</span>
        </div>
        <div className="4">
          <h3 className="desc">GÜNDEM</h3>
          <h1 className="title1">Borsa haftaya yükselişle başladı</h1>
          <span class="time">7 saat önce</span>
        </div>
      </div>
    </div>
  );
}

export default Container;
