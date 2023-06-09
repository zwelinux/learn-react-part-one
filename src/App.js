import React from "react"
import Profile from "./Profile"
import './App.css'
import Accordion from "./Accordion"
import ImportAndExport from "./ImportAndExport"
import { MiniImportAndExport } from "./ImportAndExport"
import JavaScriptInJSXWithCurlyBraces from "./JavaScriptInJSXWithCurlyBraces"
import ThemedComponent from "./ThemedComponent"
import RealProps from "./RealProps"
import DefaultValueProps from "./DefaultValueProps"
import ForwardingPropsWithJSXSpreadSyntax from "./ForwardingPropsWithJSXSPreadSyntax"
import ThirdProps from "./ThirdProps"
import ChildrenProps from "./ChildrenProps"
import PropsChangedOvertime from "./PropsChangedOvertime"
import ConditionalRendering from "./ConditionalRendering"
import LogicalAnd from "./LogicalAnd"
import RenderingListComponent from "./RenderingListComponent"
import GoodListArray from "./GoodListArray"
import FullRenderingList from "./FullRenderingList"

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
          JavaScript Logic တွေကို 
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

      <h3>1.5. Passing Props To A Component</h3>
      <div className="demo">
        <ThirdProps />
      </div>
      <Accordion
        content="
          JavaScript Objects တွေကို {{ object }} ထည့်ပြတယ်။​
        "
      />
      <br />

      <h2>6.5.2023</h2>

      <h3>1.5.2 Passing Props To A Component ~ Using Props</h3>
      <div className="demo">
        <RealProps title="ပရော့ဒေါ့ တိုက်တယ်လ်" content="ပရော့ဒေါ့ ကွန်းတန့်န်" />
      </div>
      <Accordion
        content="
          props ချည်းသက်သက်ဆို (props) 
          let title = props.title 
        "
      />
      <br />

      <h3>1.5.3 Passing Props To A Component ~ Using Default Props</h3>
      <div className="demo">
        <DefaultValueProps sccName="WWS" />
        <DefaultValueProps sccName="WWH" link="https://waaneizasharing.xyz" />
      </div>
      <Accordion
        content="
          ({ sccName, companyLink = 'waaneiza.com' })
        "
      />
      <br />

      <h3>1.5.4 Forwarding Props with JSX Spread Syntax</h3>
      <div className="demo">
        <ForwardingPropsWithJSXSpreadSyntax />
      </div>
      <Accordion
        content="
          ဆိုလိုချင်တာ အဲ့လို လျှောက်ပြီး စတန့်သိပ်မထွင်နဲ့ အကုန်အိပ်ရေးတွေ ပျက်ကုန်မယ်။​ ရေးနေကျအတိုင်းရေး ဒါမှမဟုတ် အောက်ကလို children ကိုသုံးပြီးရေးချင်ရင်ရေး 
        "
      />
      <Accordion
        content="
          နားလည်အောင်လို့တော့ ထည့်သုံးထားလိုက်ပါတယ်။ သုံးဖို့တော့ သိပ်အာသီသမရှိသေး 
        "
      />
      <br />

      <h3>1.5.5 Passing JSX as children</h3>
      <div className="demo">
        <ChildrenProps />
      </div>
      <Accordion
        content="
          Gatsby မှာ ထည့်သုံးတယ်။ 
        "
      />
      <br />

      <h3>1.5.6 How Props Change Over Time</h3>
      <div className="demo">
        <PropsChangedOvertime someData="late game app performance " />
      </div>
      <Accordion
        content="
        Props are read-only snapshots in time: every render receives a new version of props.
        You can not change props. When you need interactivity, you will need to set state.
        " 
      />
      <br />

      <h3>1.6 Conditonal Rendering with if else or ternary Operator</h3>
      <div className="demo">
        <ConditionalRendering />
      </div>
      <Accordion 
        content="
          ရိုးရိုးရှင်းရှင်း if else 
          နဲသုံးမလား Ternary Operator သုံးမလားပဲ Your Call ? : 
        "
      />
      <br />

      <h3>1.6.2 Conditonal Rendering with Logical And Operator</h3>
      <div className="demo">
        <LogicalAnd />
      </div>
      <Accordion 
        content="
          LogicalAnd Usage && 
        "
      />
      <br />

      <h3>1.7 Rendering List with simple mapping without id key index</h3>
      <div className="demo">
        <RenderingListComponent />
      </div>
      <Accordion 
        content="
          ဒါလေးကတော့ id မပါတဲ့ simple array လေးပါ။​ Browser ကို inspect ထောက်ကြည့်ရင် Error တချို့ကို တွေ့ရပါလိမ့်မယ်။​ 
        "
      />
      <br />

      <h3>1.7.2 Rendering List with filtering without id key indexing </h3>
      <div className="demo">
        <GoodListArray />
      </div>
      <Accordion 
        content="
          အရင်ဆုံးခွဲထုတ်ပြီးမှ mapping နဲ့ ပြန်ထုတ်ပါ။​ 
        "
      />
      <br />

      <h3>1.7.3 Rendering List with full key id indexing </h3>
      <div className="demo">
        <FullRenderingList />
      </div>
      <Accordion 
        content="
          key ကို <></> ထဲထည့်လို့မရဘူး
          Fragment ထဲထည့်ရင်ရတယ်။ 

          ပြီးတော့ အဲ့ fragment က react ကနေသွင်းမှရမှာ

          import { Fragment } from 'react';

        "
      />
      <br />

      <br />
    </div>
  )
}

export default App