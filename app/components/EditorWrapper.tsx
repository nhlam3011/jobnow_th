"use client";

import dynamic from "next/dynamic";
import { useMemo } from "react";
import "react-quill-new/dist/quill.snow.css";
// import "react-quill-new/dist/quill.bubble.css"; // if you want the bubble theme

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

interface EditorWrapperProps {
    value: string;
    onChange: (value: string) => void;
}

export default function EditorWrapper({ value, onChange }: EditorWrapperProps) {
    const modules = useMemo(() => ({
        toolbar: [
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ 'color': [] }, { 'background': [] }],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            [{ 'align': [] }],
            ['link', 'image', 'video'],
            ['clean']
        ],
    }), []);

    return (
        <ReactQuill
            theme="snow"
            value={value}
            onChange={onChange}
            modules={modules}
            className="blog-editor"
        />
    );
}
