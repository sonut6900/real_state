/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        textColor: "#67717d",
        appBgColor: "#F2F5F3",
        appColor: "#14264e",
        compnentBgColor: "#FFFF",
      },
      borderRadius: {
        primeryBRedius: "16px",
        borderRedius: "10px",
      },
      backgroundImage: {
        BgBuilding: "url('./img/BgBuilding.png')",
        BgsvgBuilding: "url('./img/buildingsvg.svg')",
        building01: "url('./img/building01.svg')",
        buildingset: "url('./img/buildingset.svg')",
        Bgsociety: "url('./img/society.svg')",


      },
    },
    
  },
  plugins: [],
}

