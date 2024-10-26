"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[29],{3857:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var i=n(4848),o=n(8453);const s={title:"Authentication Guide"},a="Authentication Guide",r={id:"Usage/authentication",title:"Authentication Guide",description:"ec-demo-image",source:"@site/docs/Usage/authentication.md",sourceDirName:"Usage",slug:"/Usage/authentication",permalink:"/EmbeddedChat/pulls/pr-644/docs/docs/Usage/authentication",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Authentication Guide"},sidebar:"tutorialSidebar",previous:{title:"Theming Guide",permalink:"/EmbeddedChat/pulls/pr-644/docs/docs/Usage/theming"},next:{title:"Quick Control Guide",permalink:"/EmbeddedChat/pulls/pr-644/docs/docs/Usage/ec_rc_setup"}},c={},d=[{value:"Various methods for enabling login functionality",id:"various-methods-for-enabling-login-functionality",level:3},{value:"1. Token Authentication Flow",id:"1-token-authentication-flow",level:4},{value:"a. Using <code>accessToken</code> and <code>expiresIn</code>:",id:"a-using-accesstoken-and-expiresin",level:5},{value:"b. Using <code>resume</code>:",id:"b-using-resume",level:5},{value:"2. Password Authentication Flow",id:"2-password-authentication-flow",level:4},{value:"3. OAuth Authentication Flow",id:"3-oauth-authentication-flow",level:4},{value:"Steps to Enable OAuth Login in EmbeddedChat RC App",id:"steps-to-enable-oauth-login-in-embeddedchat-rc-app",level:4},{value:"Storing the <code>ec-token</code> for automatic login",id:"storing-the-ec-token-for-automatic-login",level:2},{value:"Integrating with EmbeddedChat",id:"integrating-with-embeddedchat",level:2}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"authentication-guide",children:"Authentication Guide"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://github.com/RocketChat/EmbeddedChat/assets/78961432/b85c7b8a-65e2-4a90-a843-f4072c942ac0",alt:"ec-demo-image"})}),"\n",(0,i.jsx)(t.h3,{id:"various-methods-for-enabling-login-functionality",children:"Various methods for enabling login functionality"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"EmbeddedChat"})," component offers three distinct authentication modes to cater to different requirements for accessing Rocket.Chat. Below is a detailed guide on how to implement each authentication flow."]}),"\n",(0,i.jsx)(t.h4,{id:"1-token-authentication-flow",children:"1. Token Authentication Flow"}),"\n",(0,i.jsx)(t.p,{children:"Token authentication allows users to authenticate using a service-specific access token or personal access token (resume-token). This method is typically used for automatic user login without requiring login credentials or for managing the authentication process internally. The two ways to use token authentication are:"}),"\n",(0,i.jsxs)(t.h5,{id:"a-using-accesstoken-and-expiresin",children:["a. Using ",(0,i.jsx)(t.code,{children:"accessToken"})," and ",(0,i.jsx)(t.code,{children:"expiresIn"}),":"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:'auth: {\n  flow: \'TOKEN\',\n  credentials: {\n    serviceName: "your-service-name",\n    accessToken: "accessToken",\n    expiresIn: 3600,\n  },\n}\n'})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"serviceName"}),": The name of your authentication service."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"accessToken"}),": The access token obtained from your authentication service."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"expiresIn"}),": The duration in seconds for which the token is valid."]}),"\n"]}),"\n",(0,i.jsxs)(t.h5,{id:"b-using-resume",children:["b. Using ",(0,i.jsx)(t.code,{children:"resume"}),":"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:"auth: {\n  flow: 'TOKEN',\n  credentials: {\n    resume: 'resumeToken',\n  },\n}\n"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"resume"}),": A resume token to be used for authentication."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"To obtain the resume token, navigate to your profile settings in Rocket.Chat. Then, go to Personal Access Token and click ADD. You will get a personal access token which you can use here to facilitate auto-login with a test user."}),"\n",(0,i.jsxs)(t.p,{children:["In both cases, the credentials are posted to the ",(0,i.jsx)(t.code,{children:"/api/v1/login"})," endpoint of the RocketChat server."]}),"\n",(0,i.jsx)(t.h4,{id:"2-password-authentication-flow",children:"2. Password Authentication Flow"}),"\n",(0,i.jsx)(t.p,{children:"By default, EmbeddedChat utilizes the 'PASSWORD' flow, where a modal prompts users to enter their credentials for login."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:"auth: {\n  flow: 'PASSWORD',\n}\n"})}),"\n",(0,i.jsxs)(t.p,{children:["This method is straightforward and requires no additional configuration for the ",(0,i.jsx)(t.code,{children:"auth"})," prop. When this flow is active, users are prompted with a modal dialog to input their RocketChat username and password."]}),"\n",(0,i.jsx)(t.h4,{id:"3-oauth-authentication-flow",children:"3. OAuth Authentication Flow"}),"\n",(0,i.jsx)(t.p,{children:"EmbeddedChat also offers OAuth login functionality through OAuth configuration set up in Rocket.Chat. This authentication flow can only be utilized if the EmbeddedChat RC app is installed and configured properly on your Rocket.Chat server:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:"auth: {\n  flow: 'OAUTH',\n}\n"})}),"\n",(0,i.jsx)(t.p,{children:"This method leverages the OAuth configuration established in Rocket.Chat, ensuring a streamlined authentication process."}),"\n",(0,i.jsxs)(t.p,{children:["For instructions on installing the EmbeddedChat RC app on your Rocket.Chat server, refer to the ",(0,i.jsx)(t.a,{href:"/EmbeddedChat/pulls/pr-644/docs/docs/Usage/ec_rc_setup",children:"EmbeddedChat RC App installation guide"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"Certainly! Here are the instructions to enable OAuth login in the EmbeddedChat RC app, without using sub-bullets:"}),"\n",(0,i.jsx)(t.h4,{id:"steps-to-enable-oauth-login-in-embeddedchat-rc-app",children:"Steps to Enable OAuth Login in EmbeddedChat RC App"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Copy Callback URL:\nNavigate to the settings of your EmbeddedChat RC app. Locate the Callback URL and copy it."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Configure Third-Party Login:\nAccess your Rocket.Chat workspace. Navigate to the Third-Party Login settings. Click on New Application, provide a suitable name, and paste the copied Callback URL. Obtain the client ID and secret for this application, then activate it."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Update EmbeddedChat RC App Settings:\nReturn to the settings of your EmbeddedChat RC app. Paste the obtained client ID and secret into the respective fields. Save the updated settings."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Creating Custom OAuth:\nNavigate to Workspace Settings > OAuth within your Rocket.Chat workspace. Here, create a new custom OAuth configuration with a suitable name, and configure it as follows:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["URL: ",(0,i.jsx)(t.a,{href:"http://your-rocket-chat-server-url/api/v1",children:"http://your-rocket-chat-server-url/api/v1"})]}),"\n",(0,i.jsx)(t.li,{children:"Token sent via: Payload"}),"\n",(0,i.jsx)(t.li,{children:"Login style: Popup"}),"\n",(0,i.jsx)(t.li,{children:"Enable: Merge Users and Merge users from distinct services."}),"\n",(0,i.jsx)(t.li,{children:"Disable: Show Button on Login Page."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Finalize EmbeddedChat RC App Configuration:\nGo back to the settings of your EmbeddedChat RC app. Enter the lowercase name of your custom OAuth configuration. Save the settings to apply the OAuth integration."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Enable OAuth Login for Users:\nBy default, only administrators can use OAuth login. To enable OAuth login for all users, navigate to Wokspace > Permissions, search for manage OAuth apps permission, and grant it to the desired user roles."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Following these steps will successfully enable OAuth login in the EmbeddedChat RC app, integrating it with your Rocket.Chat workspace for streamlined user authentication."}),"\n",(0,i.jsx)(t.p,{children:"A video demonstration can also be found below to assist in successfully enabling this in your workspace:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://github.com/RocketChat/EmbeddedChat/assets/78961432/cc77d84a-f818-4e16-9e44-bd489f64cf22",children:"Watch the video demonstration"})}),"\n",(0,i.jsxs)(t.h2,{id:"storing-the-ec-token-for-automatic-login",children:["Storing the ",(0,i.jsx)(t.code,{children:"ec-token"})," for automatic login"]}),"\n",(0,i.jsxs)(t.p,{children:["Currently, EmbeddedChat supports two modes for enabling auto-login. After the user completes the login process, the Rocket.chat server returns a token referred to as ",(0,i.jsx)(t.code,{children:"ec-token"}),". This token can be saved in two ways:"]}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Storing in Local Storage: By default, the ",(0,i.jsx)(t.code,{children:"ec-token"})," is stored in local storage. Upon initial loading, if an ",(0,i.jsx)(t.code,{children:"ec-token"})," is found in local storage, it triggers auto login and manages subsequent actions accordingly."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Storing as HTTP-Only Cookie: By setting the ",(0,i.jsx)(t.code,{children:"secure"})," prop to true, the ",(0,i.jsx)(t.code,{children:"ec-token"})," can be stored as an HTTP-only cookie. This approach enhances security by preventing JavaScript access to the token. Note that this feature requires the EmbeddedChat RC app to be installed on the server."]}),"\n",(0,i.jsxs)(t.p,{children:["Here\u2019s a concise explanation of how it operates: after logging in, the token is transferred to the EmbeddedChat RC app, where it is set as an HTTP-only cookie. During auto-login, EmbeddedChat makes a request that includes cookies managed by the browser to the RC app endpoint. The RC app retrieves the token and sends it back, which EmbeddedChat then forwards to the ",(0,i.jsx)(t.code,{children:"/api/v1/login"})," endpoint of the Rocket.chat server for authentication. This functionality is fully integrated into the EmbeddedChat app, presented here for technical insight."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"integrating-with-embeddedchat",children:"Integrating with EmbeddedChat"}),"\n",(0,i.jsxs)(t.p,{children:["When integrating any of these authentication methods into ",(0,i.jsx)(t.code,{children:"EmbeddedChat"}),", ensure to include the ",(0,i.jsx)(t.code,{children:"auth"})," prop containing the desired configuration, and set the ",(0,i.jsx)(t.code,{children:"secure"})," prop to true to activate the HTTP-Only cookie."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-jsx",children:"<EmbeddedChat\n  host=\"http://your-rocketchat-server.com\"\n  roomId=\"YOUR_ROOM_ID\"\n  auth={{\n    flow: 'TOKEN', // or 'PASSWORD' or 'OAUTH'\n    credentials: {\n      // Include if using TOKEN flow\n    },\n    secure: true // or false\n  }}\n/>\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Ensure that the ",(0,i.jsx)(t.code,{children:"host"})," and ",(0,i.jsx)(t.code,{children:"roomId"})," props are set according to your RocketChat server and the specific room you want to connect to."]})]})}function l(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>r});var i=n(6540);const o={},s=i.createContext(o);function a(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);