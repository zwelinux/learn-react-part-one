import React from "react"
import Profile from "./Profile"
import './App.css'
import Accordion from "./Accordion"
import ImportAndExport from "./ImportAndExport"
import { MiniImportAndExport } from "./ImportAndExport"
import JavaScriptInJSXWithCurlyBraces from "./JavaScriptInJSXWithCurlyBraces"
import ThemedComponent from "./ThemedComponent"

const App = () => {
  return(
    <div className="main">
      <h1>Learn React</h1>
      <h2>1. Descirbing the UI</h2>
      <br />
      
      <h3>1.1. Your First Component</h3>
      <div className="demo">
        <section >
          <Profile />
          <Profile />
          <Profile />
        </section>
      </div>

      <Accordion 
        content="
          Component တွေကို Capital Letter တွေနဲ့သာရေးတယ်။
        "
      />
      <br />

      <h3>1.2. Importing and Exporting Components</h3>
      <div className="demo">
        <ImportAndExport />
        <MiniImportAndExport />
      </div>
      <Accordion
        content="Component တွေ Export ထုတ်ရာမှာ export default အနေနဲ့တော့ တစ်ခုပဲ ထုတ်လို့ရမယ်​ 
        (Eg : export default App)။
        Named Export နဲ့တော့ အများကြီးထုတ်လို့ရတယ်​ (Eg : export function Component)။ 
        "
      />
      <Accordion
        content="
          Default vs Named Export တွေကွာသလို
          import ပြန်သုံးပုံလဲ​မတူပါ။​

          Default : import Component from './Component.js';

          &

          Named : import { Component } from './Component.js'

        "
      />
      <br />

      <h3>1.3. Writing Markup with JSX</h3>
      <div className="demo">
        <h2>JSX and HTML are similar but not the same</h2>
      </div>
      <Accordion
        content="
          <div> or <> (fragment) တွေနဲ့
          JSX component ကို return ပြန်လို့ရတယ်။​ 
        "
      />
      <br />

      <h3>1.4. JavaScript in JSX with Curly Braces</h3>
      <div className="demo">
        <JavaScriptInJSXWithCurlyBraces />
      </div>
      <Accordion
        content="
          render လုပ်တဲ့ အခါ
          JavaScript Data တွေကို 
          { jsData } ထဲထည့်ပြီးပြရမယ်။​

          css style သာဆိုရင် 
          style={{  }} ထဲထည့်ပြပါ။​
          
        "
      />
      <p>Theming</p>
      <div className="demo">
        <ThemedComponent />
      </div>
      <Accordion
        content="
          Theme ကိုလွယ်လွယ်ကူကူဆင်လို့ရတယ်။ 
        "
      />


      <br />
    </div>
  )
}

export default App