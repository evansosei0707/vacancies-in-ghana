"use client";

import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";
import { forwardRef } from "react";
import { EditorProps } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"

const Editor = dynamic(() => 
 import("react-draft-wysiwyg").then(mod => mod.Editor),
 {ssr: false},
);


export default forwardRef<Object, EditorProps> (function RichTextEditor( props, ref) {
  return (
    <Editor 
        {...props}
             editorClassName={cn( "border min-h-[250px] rounded-xl px-4", props.editorClassName 
         )}
         toolbar={{
             options: ["inline", "list", "link", "history"],
         }}
         editorRef={(r) => {
            if (typeof ref === "function") {
                 ref(r)
            } else if (ref) {
                ref.current = r
            }
         }}
    />
  )
})
