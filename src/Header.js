import React, { useState, useEffect } from "react";
import logo from "./logoz.jpg";
import axios from "axios";
import "./Header.css";

function Header() {
  const [coin, setCoin] = useState("");
  const [tesla, setTesla] = useState("");

  useEffect(() => {
    setInterval(() => {
      const options = {
        method: "GET",
        url: "https://realstonks.p.rapidapi.com/AAPL",
        headers: {
          "x-rapidapi-host": "realstonks.p.rapidapi.com",
          "x-rapidapi-key":
            "24689ec804msh1367692dc31b2c4p1b5e23jsn1688fd4050d2",
        },
      };

      axios
        .request(options)
        .then(function (response) {
          setCoin(response.data.price);
        })
        .catch(function (error) {
          console.error(error);
        });
    }, []);
  }, 100);

  useEffect(() => {
    setInterval(() => {
      const options = {
        method: "GET",
        url: "https://realstonks.p.rapidapi.com/TSLA",
        headers: {
          "x-rapidapi-host": "realstonks.p.rapidapi.com",
          "x-rapidapi-key":
            "24689ec804msh1367692dc31b2c4p1b5e23jsn1688fd4050d2",
        },
      };

      axios
        .request(options)
        .then(function (response) {
          setTesla(response.data.price);
        })
        .catch(function (error) {
          console.error(error);
        });
    }, []);
  }, 1000);

  return (
    <div>
      <nav>
        <ul className="doviz-menu">
          <img src={logo} alt="" />
          <li>
            <a href="#">Döviz</a>
          </li>
          <li>
            <a href="#">Altın</a>
          </li>
          <li>
            <a href="#">Emtialar</a>
          </li>
          <li>
            <a href="#">Pariteler</a>
          </li>
          <li>
            <a href="#">Kripto Paralar</a>
          </li>
          <li>
            <a href="#">Borsa</a>
          </li>
          <li>
            <a href="#">Haberler</a>
          </li>
          <li>
            <a href="#">Analiz</a>
          </li>
          <li>
            <a href="#">Makaleler</a>
          </li>
          <li>
            <a href="#">Kredi</a>
          </li>
          <li className="z">Kur Korumalı TL Vadeli Mevduat Hesaplama</li>
        </ul>
      </nav>

      <ul className="item-container">
        <div className="item">
          <span className="coin1">APPLE</span>
          <span className="coin">${coin}</span>
        </div>
        <div className="item2">
          <span className="coin1">TESLA</span>
          <span className="coin">${tesla}</span>
        </div>
        <div className="item3">
          <span className="coin1">MICROSOFT</span>
          <span className="coin">${coin}</span>
        </div>
        <div className="item4">
          <span className="coin1">NASDAQ</span>
          <span className="coin">${coin}</span>
        </div>
        <div className="item5">
          <span className="coin1">MGROS</span>
          <span className="coin">${coin}</span>
        </div>
        <div className="item5">
          <span className="coin1">CARREFOUR</span>
          <span className="coin">${coin}</span>
        </div>
        <div className="item5">
          <span className="coin1">ASELSAN</span>
          <span className="coin">${coin}</span>
        </div>
      </ul>

      <div class="bitexen-container">
        <div class="bitexen-bar">
          <div class="tickers">
            <div class="ticker">
              <div class="header">BTC/TRY:</div>
              <div class="price">589.308,13</div>
            </div>
            <div class="ticker">
              <div class="header">ETH/TRY:</div>
              <div class="price">43.263,57</div>
            </div>
            <div class="ticker">
              <div class="header">LTC/TRY:</div>
              <div class="price">1.797,61</div>
            </div>
            <div class="ticker">
              <div class="header">USDT/TRY:</div>
              <div class="price">14,11</div>
            </div>
            <div class="ticker">
              <div class="header">BTXN/TRY:</div>
              <div class="price">32,60</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
