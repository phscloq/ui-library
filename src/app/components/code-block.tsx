"use client"

import { useState } from "react"
import { Check, Copy } from "lucide-react"
import { Highlight, themes } from "prism-react-renderer"

interface CodeBlockProps {
  code: string
  language?: string
  filename?: string
}

export function CodeBlock({ code, language = "tsx", filename }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="group relative bg-slate-700 dark:bg-slate-300">
      {filename && (
        <div className="flex items-center justify-between border-b border-gray-700/50 px-4 py-2 text-xs text-gray-400">
          <span>{filename}</span>
          <span className="text-gray-500">{language}</span>
        </div>
      )}
      <div className="relative ">
        <button
          onClick={copyToClipboard}
          className="absolute right-2 top-2 rounded-md p-2 text-gray-400 opacity-0 transition-opacity hover:text-gray-200 group-hover:opacity-100"
        >
          {copied ? <Check className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
          <span className="sr-only">Copy code</span>
        </button>
        <Highlight theme={themes.nightOwl} code={code.trim()} language={language as any}>
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={`${className} overflow-x-auto p-4 text-sm`} style={style}>
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line })}>
                  <span className="mr-4 inline-block w-4 select-none text-right text-gray-600">{i + 1}</span>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </div>
    </div>
  )
}

