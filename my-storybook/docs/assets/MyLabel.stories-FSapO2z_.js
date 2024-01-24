import{j as _}from"./jsx-runtime-AgcCsxC8.js";import"./index-XiNr8FW2.js";import"./_commonjsHelpers-5-cIlDoe.js";const s=({label:o,size:x="normal",allCaps:v=!1,color:L,fontColor:t})=>_.jsx("span",{className:`label ${x} ${L}`,style:{color:`${t||"black"}`},children:v?o.toUpperCase():o});try{s.displayName="MyLabel",s.__docgenInfo={description:`! Todas son opcionales
allCaps: boolean,
color: 'text-primary' | 'text-secondary' | 'text-tertiary',
fontColor?: string, Texto del span`,displayName:"MyLabel",props:{label:{defaultValue:null,description:"Text to display",name:"label",required:!0,type:{name:"string"}},size:{defaultValue:{value:"normal"},description:"Label size",name:"size",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'}]}},allCaps:{defaultValue:{value:"false"},description:"Capitalize All letters",name:"allCaps",required:!1,type:{name:"boolean"}},color:{defaultValue:null,description:"Label Color",name:"color",required:!1,type:{name:"enum",value:[{value:'"text-primary"'},{value:'"text-secondary"'},{value:'"text-tertiary"'}]}},fontColor:{defaultValue:null,description:"Font Color",name:"fontColor",required:!1,type:{name:"string"}}}}}catch{}const q={title:"UI/labels/My Label",component:s,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{size:{control:"select"},color:{control:"select"},fontColor:{control:"color"}}},e={args:{label:"Basic Label"}},a={args:{label:"All Caps label",size:"normal",allCaps:!0}},r={args:{label:"Secondary Label",color:"text-secondary"}},l={args:{label:"Custom Color label",fontColor:"#a4a63c"}};var n,c,p;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    label: 'Basic Label'
  }
}`,...(p=(c=e.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var i,u,m;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: 'All Caps label',
    size: 'normal',
    allCaps: true
  }
}`,...(m=(u=a.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var d,y,b;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: 'Secondary Label',
    color: "text-secondary"
  }
}`,...(b=(y=r.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var C,f,g;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: 'Custom Color label',
    fontColor: '#a4a63c'
  }
}`,...(g=(f=l.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const A=["Basic","AllCaps","Secondary","CustomColor"];export{a as AllCaps,e as Basic,l as CustomColor,r as Secondary,A as __namedExportsOrder,q as default};
