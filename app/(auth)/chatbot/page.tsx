'use client'

import { useState } from "react"
import './chatbot.css'
import ProtectedRoute from "@/components/protectedRoute"
import { appConstants } from "@/utils/constants"

export const metadata = {
  title: 'Chatbot - Simple',
  description: 'Page description',
}

// import Link from 'next/link'


export default function Chatbot() {

  const [inputQuestion, setInputQuestion] = useState('')
  const handleLogout = ():void=>{
    localStorage.removeItem(appConstants.token)
    window.location.href = '/'
  }
  return (
    <ProtectedRoute>
    <div className="container">
    <div className="gradient" />
    <div className="row">
      <div className="box conversations">
        <div className="top">
          <button className="new_convo">
            <i className="fa-regular fa-plus" />
            <span>New Conversation</span>
          </button>
          <div className="spinner" />
        </div>
        <div className="bottom_buttons">
          <button>
          <i className="fa-solid fa-trash"/>
            <span>Clear Conversations</span>
          </button>
       
        </div>
      </div>
      <div className="conversation disable-scrollbars">
        <div className="stop_generating stop_generating-hidden">
          <button id="cancelButton">
            <span>Stop Generating</span>
            <i className="fa-regular fa-stop" />
          </button>
        </div>
        <div className="box" id="messages"></div>
        <div className="user-input">
          <div className="box input-box">
            <textarea
              onChange={(e: any) => setInputQuestion(e.target.value)}
              id="message-input"
              placeholder="Ask a question"
              rows={1}
              style={{ whiteSpace: "pre-wrap", resize: "none" }}
              // oninput="resizeTextarea(this)"
              defaultValue={inputQuestion}
            />
            <div id="send-button">
            <i className="fa-solid fa-paper-plane"/>              
            </div>
          </div>
        </div>
        <div className="buttons">
          <div className="field">
            <input type="checkbox" id="switch" />
            <label htmlFor="switch" />
            <span className="about">Web Access</span>
          </div>
          <div className="field">
            <select name="model" id="model">
              <option value="gpt-3.5-turbo" selected>
                gpt-3.5-turbo
              </option>
              <option value="gpt-4">gpt-4</option>
              <option value="gpt-3.5-turbo-0301">gpt-3.5-turbo-0301</option>
              <option value="gpt-4-0314">gpt-4-0314</option>
            </select>
            <button onClick={handleLogout}>Logout</button>
          </div>
          {/* <div className="field">
            <select name="jailbreak" id="jailbreak">
              <option value="default" selected>
                default
              </option>
              <option value="gpt-math-1.0">math 1.0</option>
              <option value="gpt-dude-1.0">dude 1.0</option>
              <option value="gpt-dan-1.0">dan 1.0</option>
              <option value="gpt-dan-2.0">dan 2.0</option>
              <option value="gpt-dev-2.0">dev 2.0</option>
              <option value="gpt-evil-1.0">evil 1.0</option>
            </select>
          </div> */}
          
        </div>
      </div>
    </div>
    <div className="mobile-sidebar">
      <i className="fa-solid fa-bars" />
    </div>
  </div>
  </ProtectedRoute>
  )
}
