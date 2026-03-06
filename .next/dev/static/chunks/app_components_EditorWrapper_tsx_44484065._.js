(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/components/EditorWrapper.tsx [app-client] (ecmascript, next/dynamic entry, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  {
    "path": "static/chunks/node_modules_react-quill-new_dist_quill_snow_98ea75db.css",
    "included": [
      "[project]/node_modules/react-quill-new/dist/quill.snow.css [app-client] (css)"
    ]
  },
  "static/chunks/node_modules_react-quill-new_lib_index_08a21317.js",
  "static/chunks/app_components_EditorWrapper_tsx_309e8db7._.js",
  "static/chunks/app_components_EditorWrapper_tsx_445909f2._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/app/components/EditorWrapper.tsx [app-client] (ecmascript, next/dynamic entry)");
    });
});
}),
]);