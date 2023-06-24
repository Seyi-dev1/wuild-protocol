import lock from "../../../app/assets/skillcard/icons8-lock-30.png";
import lightning from "../../../app/assets/skillcard/icons8-lightning-bolt-30.png";
import ethereum from "../../../app/assets/skillcard/icons8-ethereum-40.png";
import bitcoin from "../../../app/assets/skillcard/icons8-bitcoin-30.png";
import binance from "../../../app/assets/skillcard/icons8-binance-30.png";
import doge from "../../../app/assets/skillcard/icons8-dogecoin-30.png";
import camera from "../../../app/assets/skillcard/icons8-camera-30.png";
import tick from "../../../app/assets/skillcard/icons8-instagram-verification-badge-30.png";
const data2 = [
  {
    id: 1,
    title: "Governor",
    heading: "Participate in Governance.",
    images: [
      {
        id: 1,
        Image: lightning,
        type: "normal",
      },
      {
        id: 2,
        Image: tick,
        type: "normal",
      },
      {
        id: 3,
        Image: camera,
        type: "normal",
      },
      {
        id: 4,
        Image: lock,
        type: "lock",
      },
      {
        id: 5,
        Image: lock,
        type: "lock",
      },
      {
        id: 6,
        Image: lock,
        type: "lock",
      },
    ],
  },

  {
    id: 2,
    title: "Trading Druid",
    heading: "Trade tokens on Layer-2's and side-chains.",
    images: [
      {
        id: 1,
        Image: doge,
        type: "normal",
      },
      {
        id: 2,
        Image: ethereum,
        type: "normal",
      },
      {
        id: 3,
        Image: binance,
        type: "normal",
      },
      {
        id: 4,
        Image: bitcoin,
        type: "normal",
      },
      {
        id: 5,
        Image: lock,
        type: "lock",
      },
    ],
  },
];

export default data2;
