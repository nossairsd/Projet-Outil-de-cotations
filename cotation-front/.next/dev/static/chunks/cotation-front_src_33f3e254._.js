(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/cotation-front/src/components/dashboard/stats-card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StatsCard",
    ()=>StatsCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cotation-front/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cotation-front/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cotation-front/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/cotation-front/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__ = __turbopack_context__.i("[project]/cotation-front/node_modules/lucide-react/dist/esm/icons/trending-down.js [app-client] (ecmascript) <export default as TrendingDown>");
"use client";
;
;
;
;
function StatsCard(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(26);
    if ($[0] !== "5237d96c9a13fdaeebce0130d2c0220efaed7a08d36ccc04be5cf7a7d0c9a25d") {
        for(let $i = 0; $i < 26; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "5237d96c9a13fdaeebce0130d2c0220efaed7a08d36ccc04be5cf7a7d0c9a25d";
    }
    const { title, value, description, icon: Icon, trend, className } = t0;
    let t1;
    if ($[1] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("group relative overflow-hidden rounded-xl border border-border/50 bg-card p-4 md:p-6 transition-all duration-300 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 hover:-translate-y-0.5", className);
        $[1] = className;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        }, void 0, false, {
            fileName: "[project]/cotation-front/src/components/dashboard/stats-card.tsx",
            lineNumber: 44,
            columnNumber: 10
        }, this);
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-accent/10 to-transparent rounded-bl-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        }, void 0, false, {
            fileName: "[project]/cotation-front/src/components/dashboard/stats-card.tsx",
            lineNumber: 45,
            columnNumber: 10
        }, this);
        $[3] = t2;
        $[4] = t3;
    } else {
        t2 = $[3];
        t3 = $[4];
    }
    let t4;
    if ($[5] !== title) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs md:text-sm font-medium text-muted-foreground truncate",
            children: title
        }, void 0, false, {
            fileName: "[project]/cotation-front/src/components/dashboard/stats-card.tsx",
            lineNumber: 54,
            columnNumber: 10
        }, this);
        $[5] = title;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] !== value) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-2xl md:text-3xl font-bold tracking-tight text-foreground",
            children: value
        }, void 0, false, {
            fileName: "[project]/cotation-front/src/components/dashboard/stats-card.tsx",
            lineNumber: 62,
            columnNumber: 10
        }, this);
        $[7] = value;
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    let t6;
    if ($[9] !== description) {
        t6 = description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-[11px] md:text-xs text-muted-foreground truncate",
            children: description
        }, void 0, false, {
            fileName: "[project]/cotation-front/src/components/dashboard/stats-card.tsx",
            lineNumber: 70,
            columnNumber: 25
        }, this);
        $[9] = description;
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    let t7;
    if ($[11] !== trend) {
        t7 = trend && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-1.5 pt-1",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-0.5 px-1.5 py-0.5 rounded-full text-[10px] md:text-xs font-semibold", trend.isPositive ? "bg-emerald-500/10 text-emerald-600" : "bg-red-500/10 text-red-600"),
                    children: [
                        trend.isPositive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                            className: "h-3 w-3"
                        }, void 0, false, {
                            fileName: "[project]/cotation-front/src/components/dashboard/stats-card.tsx",
                            lineNumber: 78,
                            columnNumber: 288
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__["TrendingDown"], {
                            className: "h-3 w-3"
                        }, void 0, false, {
                            fileName: "[project]/cotation-front/src/components/dashboard/stats-card.tsx",
                            lineNumber: 78,
                            columnNumber: 325
                        }, this),
                        trend.isPositive ? "+" : "-",
                        Math.abs(trend.value),
                        "%"
                    ]
                }, void 0, true, {
                    fileName: "[project]/cotation-front/src/components/dashboard/stats-card.tsx",
                    lineNumber: 78,
                    columnNumber: 67
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-[10px] md:text-xs text-muted-foreground hidden sm:inline",
                    children: "vs mois dernier"
                }, void 0, false, {
                    fileName: "[project]/cotation-front/src/components/dashboard/stats-card.tsx",
                    lineNumber: 78,
                    columnNumber: 422
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/cotation-front/src/components/dashboard/stats-card.tsx",
            lineNumber: 78,
            columnNumber: 19
        }, this);
        $[11] = trend;
        $[12] = t7;
    } else {
        t7 = $[12];
    }
    let t8;
    if ($[13] !== t4 || $[14] !== t5 || $[15] !== t6 || $[16] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-1.5 md:space-y-2 min-w-0 flex-1",
            children: [
                t4,
                t5,
                t6,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/cotation-front/src/components/dashboard/stats-card.tsx",
            lineNumber: 86,
            columnNumber: 10
        }, this);
        $[13] = t4;
        $[14] = t5;
        $[15] = t6;
        $[16] = t7;
        $[17] = t8;
    } else {
        t8 = $[17];
    }
    let t9;
    if ($[18] !== Icon) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-10 w-10 md:h-12 md:w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 text-accent transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-accent/20",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                className: "h-5 w-5 md:h-6 md:w-6"
            }, void 0, false, {
                fileName: "[project]/cotation-front/src/components/dashboard/stats-card.tsx",
                lineNumber: 97,
                columnNumber: 264
            }, this)
        }, void 0, false, {
            fileName: "[project]/cotation-front/src/components/dashboard/stats-card.tsx",
            lineNumber: 97,
            columnNumber: 10
        }, this);
        $[18] = Icon;
        $[19] = t9;
    } else {
        t9 = $[19];
    }
    let t10;
    if ($[20] !== t8 || $[21] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative flex items-start justify-between gap-4",
            children: [
                t8,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/cotation-front/src/components/dashboard/stats-card.tsx",
            lineNumber: 105,
            columnNumber: 11
        }, this);
        $[20] = t8;
        $[21] = t9;
        $[22] = t10;
    } else {
        t10 = $[22];
    }
    let t11;
    if ($[23] !== t1 || $[24] !== t10) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t1,
            children: [
                t2,
                t3,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/cotation-front/src/components/dashboard/stats-card.tsx",
            lineNumber: 114,
            columnNumber: 11
        }, this);
        $[23] = t1;
        $[24] = t10;
        $[25] = t11;
    } else {
        t11 = $[25];
    }
    return t11;
}
_c = StatsCard;
var _c;
__turbopack_context__.k.register(_c, "StatsCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/cotation-front/src/components/ui/table.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Table",
    ()=>Table,
    "TableBody",
    ()=>TableBody,
    "TableCaption",
    ()=>TableCaption,
    "TableCell",
    ()=>TableCell,
    "TableFooter",
    ()=>TableFooter,
    "TableHead",
    ()=>TableHead,
    "TableHeader",
    ()=>TableHeader,
    "TableRow",
    ()=>TableRow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cotation-front/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cotation-front/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cotation-front/src/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
function Table(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "b84999ef9027722eb862a40bf94c422fd78059791f9cc517f550f283f06d6725") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b84999ef9027722eb862a40bf94c422fd78059791f9cc517f550f283f06d6725";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full caption-bottom text-sm", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "data-slot": "table-container",
            className: "relative w-full overflow-x-auto",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                "data-slot": "table",
                className: t1,
                ...props
            }, void 0, false, {
                fileName: "[project]/cotation-front/src/components/ui/table.tsx",
                lineNumber: 38,
                columnNumber: 87
            }, this)
        }, void 0, false, {
            fileName: "[project]/cotation-front/src/components/ui/table.tsx",
            lineNumber: 38,
            columnNumber: 10
        }, this);
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c = Table;
function TableHeader(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "b84999ef9027722eb862a40bf94c422fd78059791f9cc517f550f283f06d6725") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b84999ef9027722eb862a40bf94c422fd78059791f9cc517f550f283f06d6725";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("[&_tr]:border-b", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
            "data-slot": "table-header",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/cotation-front/src/components/ui/table.tsx",
            lineNumber: 79,
            columnNumber: 10
        }, this);
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c1 = TableHeader;
function TableBody(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "b84999ef9027722eb862a40bf94c422fd78059791f9cc517f550f283f06d6725") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b84999ef9027722eb862a40bf94c422fd78059791f9cc517f550f283f06d6725";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("[&_tr:last-child]:border-0", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
            "data-slot": "table-body",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/cotation-front/src/components/ui/table.tsx",
            lineNumber: 120,
            columnNumber: 10
        }, this);
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c2 = TableBody;
function TableFooter(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "b84999ef9027722eb862a40bf94c422fd78059791f9cc517f550f283f06d6725") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b84999ef9027722eb862a40bf94c422fd78059791f9cc517f550f283f06d6725";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-muted/50 border-t font-medium [&>tr]:last:border-b-0", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tfoot", {
            "data-slot": "table-footer",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/cotation-front/src/components/ui/table.tsx",
            lineNumber: 161,
            columnNumber: 10
        }, this);
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c3 = TableFooter;
function TableRow(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "b84999ef9027722eb862a40bf94c422fd78059791f9cc517f550f283f06d6725") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b84999ef9027722eb862a40bf94c422fd78059791f9cc517f550f283f06d6725";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
            "data-slot": "table-row",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/cotation-front/src/components/ui/table.tsx",
            lineNumber: 202,
            columnNumber: 10
        }, this);
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c4 = TableRow;
function TableHead(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "b84999ef9027722eb862a40bf94c422fd78059791f9cc517f550f283f06d6725") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b84999ef9027722eb862a40bf94c422fd78059791f9cc517f550f283f06d6725";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
            "data-slot": "table-head",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/cotation-front/src/components/ui/table.tsx",
            lineNumber: 243,
            columnNumber: 10
        }, this);
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c5 = TableHead;
function TableCell(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "b84999ef9027722eb862a40bf94c422fd78059791f9cc517f550f283f06d6725") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b84999ef9027722eb862a40bf94c422fd78059791f9cc517f550f283f06d6725";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
            "data-slot": "table-cell",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/cotation-front/src/components/ui/table.tsx",
            lineNumber: 284,
            columnNumber: 10
        }, this);
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c6 = TableCell;
function TableCaption(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "b84999ef9027722eb862a40bf94c422fd78059791f9cc517f550f283f06d6725") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b84999ef9027722eb862a40bf94c422fd78059791f9cc517f550f283f06d6725";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground mt-4 text-sm", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("caption", {
            "data-slot": "table-caption",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/cotation-front/src/components/ui/table.tsx",
            lineNumber: 325,
            columnNumber: 10
        }, this);
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c7 = TableCaption;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7;
__turbopack_context__.k.register(_c, "Table");
__turbopack_context__.k.register(_c1, "TableHeader");
__turbopack_context__.k.register(_c2, "TableBody");
__turbopack_context__.k.register(_c3, "TableFooter");
__turbopack_context__.k.register(_c4, "TableRow");
__turbopack_context__.k.register(_c5, "TableHead");
__turbopack_context__.k.register(_c6, "TableCell");
__turbopack_context__.k.register(_c7, "TableCaption");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/cotation-front/src/components/ui/badge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "badgeVariants",
    ()=>badgeVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cotation-front/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cotation-front/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cotation-front/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cotation-front/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cotation-front/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])('inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden', {
    variants: {
        variant: {
            default: 'border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90',
            secondary: 'border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90',
            destructive: 'border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
            outline: 'text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground'
        }
    },
    defaultVariants: {
        variant: 'default'
    }
});
function Badge(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(13);
    if ($[0] !== "b8b0c68cca7b949b0ac24487d1a544d0d95bb14ae5144bc5dedd544616e78364") {
        for(let $i = 0; $i < 13; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b8b0c68cca7b949b0ac24487d1a544d0d95bb14ae5144bc5dedd544616e78364";
    }
    let className;
    let props;
    let t1;
    let variant;
    if ($[1] !== t0) {
        ({ className, variant, asChild: t1, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
        $[4] = t1;
        $[5] = variant;
    } else {
        className = $[2];
        props = $[3];
        t1 = $[4];
        variant = $[5];
    }
    const asChild = t1 === undefined ? false : t1;
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "span";
    let t2;
    if ($[6] !== className || $[7] !== variant) {
        t2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className);
        $[6] = className;
        $[7] = variant;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    let t3;
    if ($[9] !== Comp || $[10] !== props || $[11] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
            "data-slot": "badge",
            className: t2,
            ...props
        }, void 0, false, {
            fileName: "[project]/cotation-front/src/components/ui/badge.tsx",
            lineNumber: 64,
            columnNumber: 10
        }, this);
        $[9] = Comp;
        $[10] = props;
        $[11] = t2;
        $[12] = t3;
    } else {
        t3 = $[12];
    }
    return t3;
}
_c = Badge;
;
var _c;
__turbopack_context__.k.register(_c, "Badge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/cotation-front/src/components/ui/avatar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Avatar",
    ()=>Avatar,
    "AvatarFallback",
    ()=>AvatarFallback,
    "AvatarImage",
    ()=>AvatarImage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cotation-front/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cotation-front/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cotation-front/node_modules/@radix-ui/react-avatar/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cotation-front/src/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
function Avatar(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "987b577cf647e16968e78cffcd85d4cd52c310bc845ed30391dd239eb700bd2f") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "987b577cf647e16968e78cffcd85d4cd52c310bc845ed30391dd239eb700bd2f";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative flex size-8 shrink-0 overflow-hidden rounded-full", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
            "data-slot": "avatar",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/cotation-front/src/components/ui/avatar.tsx",
            lineNumber: 39,
            columnNumber: 10
        }, this);
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c = Avatar;
function AvatarImage(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "987b577cf647e16968e78cffcd85d4cd52c310bc845ed30391dd239eb700bd2f") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "987b577cf647e16968e78cffcd85d4cd52c310bc845ed30391dd239eb700bd2f";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("aspect-square size-full", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Image"], {
            "data-slot": "avatar-image",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/cotation-front/src/components/ui/avatar.tsx",
            lineNumber: 80,
            columnNumber: 10
        }, this);
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c1 = AvatarImage;
function AvatarFallback(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "987b577cf647e16968e78cffcd85d4cd52c310bc845ed30391dd239eb700bd2f") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "987b577cf647e16968e78cffcd85d4cd52c310bc845ed30391dd239eb700bd2f";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-muted flex size-full items-center justify-center rounded-full", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fallback"], {
            "data-slot": "avatar-fallback",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/cotation-front/src/components/ui/avatar.tsx",
            lineNumber: 121,
            columnNumber: 10
        }, this);
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c2 = AvatarFallback;
;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "Avatar");
__turbopack_context__.k.register(_c1, "AvatarImage");
__turbopack_context__.k.register(_c2, "AvatarFallback");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/cotation-front/src/components/dashboard/admin/users-table.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UsersTable",
    ()=>UsersTable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cotation-front/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cotation-front/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cotation-front/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cotation-front/src/components/ui/table.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cotation-front/src/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cotation-front/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cotation-front/src/components/ui/dropdown-menu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cotation-front/src/components/ui/avatar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/cotation-front/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreHorizontal$3e$__ = __turbopack_context__.i("[project]/cotation-front/node_modules/lucide-react/dist/esm/icons/ellipsis.js [app-client] (ecmascript) <export default as MoreHorizontal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__ = __turbopack_context__.i("[project]/cotation-front/node_modules/lucide-react/dist/esm/icons/user-check.js [app-client] (ecmascript) <export default as UserCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserX$3e$__ = __turbopack_context__.i("[project]/cotation-front/node_modules/lucide-react/dist/esm/icons/user-x.js [app-client] (ecmascript) <export default as UserX>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__ = __turbopack_context__.i("[project]/cotation-front/node_modules/lucide-react/dist/esm/icons/square-pen.js [app-client] (ecmascript) <export default as Edit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/cotation-front/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cotation-front/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
const roleColors = {
    ADMIN: "bg-red-500/10 text-red-600 border-red-500/20",
    RESPONSABLE: "bg-purple-500/10 text-purple-600 border-purple-500/20",
    VALIDATEUR: "bg-blue-500/10 text-blue-600 border-blue-500/20",
    DEMANDEUR: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20"
};
const roleLabels = {
    ADMIN: "Admin",
    RESPONSABLE: "Responsable",
    VALIDATEUR: "Validateur",
    DEMANDEUR: "Demandeur"
};
const statusColors = {
    ACTIVE: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
    INACTIVE: "bg-gray-500/10 text-gray-600 border-gray-500/20",
    PENDING: "bg-amber-500/10 text-amber-600 border-amber-500/20"
};
const statusLabels = {
    ACTIVE: "Actif",
    INACTIVE: "Inactif",
    PENDING: "En attente"
};
function getInitials(firstName, lastName) {
    return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
}
function formatDate(date) {
    return new Intl.DateTimeFormat("fr-FR", {
        day: "2-digit",
        month: "short",
        year: "numeric"
    }).format(date);
}
function UsersTable(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "16789b17b33a41a03c17e7bfe7a4a9f186b5b4dd940a3dd1d5fe2c7812ce74f5") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "16789b17b33a41a03c17e7bfe7a4a9f186b5b4dd940a3dd1d5fe2c7812ce74f5";
    }
    const { users, onViewDetails, onToggleStatus, onEdit, onDelete } = t0;
    const [hoveredRow, setHoveredRow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHeader"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                className: "border-border/50 bg-muted/50 hover:bg-muted/50",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                        className: "font-semibold text-foreground text-center whitespace-nowrap px-4",
                        children: "Nom & Pr\xE9nom"
                    }, void 0, false, {
                        fileName: "[project]/cotation-front/src/components/dashboard/admin/users-table.tsx",
                        lineNumber: 70,
                        columnNumber: 92
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                        className: "font-semibold text-foreground text-center whitespace-nowrap px-4",
                        children: "Téléphone"
                    }, void 0, false, {
                        fileName: "[project]/cotation-front/src/components/dashboard/admin/users-table.tsx",
                        lineNumber: 70,
                        columnNumber: 211
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                        className: "font-semibold text-foreground text-center whitespace-nowrap px-4",
                        children: "Email"
                    }, void 0, false, {
                        fileName: "[project]/cotation-front/src/components/dashboard/admin/users-table.tsx",
                        lineNumber: 70,
                        columnNumber: 320
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                        className: "font-semibold text-foreground text-center whitespace-nowrap px-4",
                        children: "Région"
                    }, void 0, false, {
                        fileName: "[project]/cotation-front/src/components/dashboard/admin/users-table.tsx",
                        lineNumber: 70,
                        columnNumber: 425
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                        className: "font-semibold text-foreground text-center whitespace-nowrap px-4",
                        children: "Fonction"
                    }, void 0, false, {
                        fileName: "[project]/cotation-front/src/components/dashboard/admin/users-table.tsx",
                        lineNumber: 70,
                        columnNumber: 531
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                        className: "font-semibold text-foreground text-center whitespace-nowrap px-4",
                        children: "Rôle"
                    }, void 0, false, {
                        fileName: "[project]/cotation-front/src/components/dashboard/admin/users-table.tsx",
                        lineNumber: 70,
                        columnNumber: 639
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                        className: "font-semibold text-foreground text-center whitespace-nowrap px-4",
                        children: "Date création"
                    }, void 0, false, {
                        fileName: "[project]/cotation-front/src/components/dashboard/admin/users-table.tsx",
                        lineNumber: 70,
                        columnNumber: 743
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                        className: "font-semibold text-foreground text-center whitespace-nowrap px-4",
                        children: "Statut"
                    }, void 0, false, {
                        fileName: "[project]/cotation-front/src/components/dashboard/admin/users-table.tsx",
                        lineNumber: 70,
                        columnNumber: 856
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                        className: "font-semibold text-foreground text-center whitespace-nowrap px-4",
                        children: "Détails"
                    }, void 0, false, {
                        fileName: "[project]/cotation-front/src/components/dashboard/admin/users-table.tsx",
                        lineNumber: 70,
                        columnNumber: 962
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/cotation-front/src/components/dashboard/admin/users-table.tsx",
                lineNumber: 70,
                columnNumber: 23
            }, this)
        }, void 0, false, {
            fileName: "[project]/cotation-front/src/components/dashboard/admin/users-table.tsx",
            lineNumber: 70,
            columnNumber: 10
        }, this);
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] !== hoveredRow || $[3] !== onDelete || $[4] !== onEdit || $[5] !== onToggleStatus || $[6] !== onViewDetails || $[7] !== users) {
        t2 = users.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                colSpan: 9,
                className: "h-32 text-center text-muted-foreground",
                children: "Aucun utilisateur trouvé"
            }, void 0, false, {
                fileName: "[project]/cotation-front/src/components/dashboard/admin/users-table.tsx",
                lineNumber: 77,
                columnNumber: 41
            }, this)
        }, void 0, false, {
            fileName: "[project]/cotation-front/src/components/dashboard/admin/users-table.tsx",
            lineNumber: 77,
            columnNumber: 31
        }, this) : users.map({
            "UsersTable[users.map()]": (user)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("border-border/30 transition-colors duration-200", hoveredRow === user.id && "bg-muted/30"),
                    onMouseEnter: {
                        "UsersTable[users.map() > <TableRow>.onMouseEnter]": ()=>setHoveredRow(user.id)
                    }["UsersTable[users.map() > <TableRow>.onMouseEnter]"],
                    onMouseLeave: {
                        "UsersTable[users.map() > <TableRow>.onMouseLeave]": ()=>setHoveredRow(null)
                    }["UsersTable[users.map() > <TableRow>.onMouseLeave]"],
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                            className: "text-center px-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
                                        className: "h-9 w-9 border-2 border-border/50 flex-shrink-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarImage"], {
                                                src: user.avatar,
                                                alt: `${user.firstName} ${user.lastName}`
                                            }, void 0, false, {
                                                fileName: "[project]/cotation-front/src/components/dashboard/admin/users-table.tsx",
                                                lineNumber: 82,
                                                columnNumber: 227
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarFallback"], {
                                                className: "bg-gradient-to-br from-cyan-500 to-blue-600 text-white text-xs font-semibold",
                                                children: getInitials(user.firstName, user.lastName)
                                            }, void 0, false, {
                                                fileName: "[project]/cotation-front/src/components/dashboard/admin/users-table.tsx",
                                                lineNumber: 82,
                                                columnNumber: 303
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/cotation-front/src/components/dashboard/admin/users-table.tsx",
                                        lineNumber: 82,
                                        columnNumber: 159
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium text-foreground whitespace-nowrap",
                                        children: [
                                            user.firstName,
                                            " ",
                                            user.lastName
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/cotation-front/src/components/dashboard/admin/users-table.tsx",
                                        lineNumber: 82,
                                        columnNumber: 478
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/cotation-front/src/components/dashboard/admin/users-table.tsx",
                                lineNumber: 82,
                                columnNumber: 103
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/cotation-front/src/components/dashboard/admin/users-table.tsx",
                            lineNumber: 82,
                            columnNumber: 63
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                            className: "text-center text-muted-foreground px-4 whitespace-nowrap",
                            children: user.phone
                        }, void 0, false, {
                            fileName: "[project]/cotation-front/src/components/dashboard/admin/users-table.tsx",
                            lineNumber: 82,
                            columnNumber: 599
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                            className: "text-center text-muted-foreground px-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "truncate block max-w-[180px] mx-auto",
                                title: user.email,
                                children: user.email
                            }, void 0, false, {
                                fileName: "[project]/cotation-front/src/components/dashboard/admin/users-table.tsx",
                                lineNumber: 82,
                                columnNumber: 765
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/cotation-front/src/components/dashboard/admin/users-table.tsx",
                            lineNumber: 82,
                            columnNumber: 703
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                            className: "text-center text-muted-foreground px-4 whitespace-nowrap",
                            children: user.region
                        }, void 0, false, {
                            fileName: "[project]/cotation-front/src/components/dashboard/admin/users-table.tsx",
                            lineNumber: 82,
                            columnNumber: 870
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                            className: "text-center text-muted-foreground px-4 whitespace-nowrap",
                            children: user.fonction
                        }, void 0, false, {
                            fileName: "[project]/cotation-front/src/components/dashboard/admin/users-table.tsx",
                            lineNumber: 82,
                            columnNumber: 975
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                            className: "text-center px-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                    variant: "outline",
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("font-medium text-xs", roleColors[user.role]),
                                    children: roleLabels[user.role]
                                }, void 0, false, {
                                    fileName: "[project]/cotation-front/src/components/dashboard/admin/users-table.tsx",
                                    lineNumber: 82,
                                    columnNumber: 1159
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/cotation-front/src/components/dashboard/admin/users-table.tsx",
                                lineNumber: 82,
                                columnNumber: 1122
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/cotation-front/src/components/dashboard/admin/users-table.tsx",
                            lineNumber: 82,
                            columnNumber: 1082
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                            className: "text-center text-muted-foreground px-4 whitespace-nowrap",
                            children: formatDate(user.createdAt)
                        }, void 0, false, {
                            fileName: "[project]/cotation-front/src/components/dashboard/admin/users-table.tsx",
                            lineNumber: 82,
                            columnNumber: 1294
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                            className: "text-center px-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                    variant: "outline",
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("font-medium text-xs", statusColors[user.status]),
                                    children: statusLabels[user.status]
                                }, void 0, false, {
                                    fileName: "[project]/cotation-front/src/components/dashboard/admin/users-table.tsx",
                                    lineNumber: 82,
                                    columnNumber: 1491
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/cotation-front/src/components/dashboard/admin/users-table.tsx",
                                lineNumber: 82,
                                columnNumber: 1454
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/cotation-front/src/components/dashboard/admin/users-table.tsx",
                            lineNumber: 82,
                            columnNumber: 1414
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                            className: "text-center px-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-center gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "outline",
                                        size: "sm",
                                        onClick: {
                                            "UsersTable[users.map() > <Button>.onClick]": ()=>onViewDetails(user)
                                        }["UsersTable[users.map() > <Button>.onClick]"],
                                        className: "h-8 px-3 text-xs font-medium border-border/50 hover:bg-muted",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                className: "h-3.5 w-3.5 mr-1.5"
                                            }, void 0, false, {
                                                fileName: "[project]/cotation-front/src/components/dashboard/admin/users-table.tsx",
                                                lineNumber: 84,
                                                columnNumber: 135
                                            }, this),
                                            "Afficher"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/cotation-front/src/components/dashboard/admin/users-table.tsx",
                                        lineNumber: 82,
                                        columnNumber: 1730
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: user.status === "ACTIVE" ? "outline" : "outline",
                                        size: "sm",
                                        onClick: {
                                            "UsersTable[users.map() > <Button>.onClick]": ()=>onToggleStatus(user)
                                        }["UsersTable[users.map() > <Button>.onClick]"],
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-8 px-3 text-xs font-medium", user.status === "ACTIVE" ? "text-red-600 border-red-200 hover:bg-red-50 hover:border-red-300" : "text-emerald-600 border-emerald-200 hover:bg-emerald-50 hover:border-emerald-300"),
                                        children: user.status === "ACTIVE" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserX$3e$__["UserX"], {
                                                    className: "h-3.5 w-3.5 mr-1.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/cotation-front/src/components/dashboard/admin/users-table.tsx",
                                                    lineNumber: 86,
                                                    columnNumber: 319
                                                }, this),
                                                "Désactiver"
                                            ]
                                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__["UserCheck"], {
                                                    className: "h-3.5 w-3.5 mr-1.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/cotation-front/src/components/dashboard/admin/users-table.tsx",
                                                    lineNumber: 86,
                                                    columnNumber: 377
                                                }, this),
                                                "Activer"
                                            ]
                                        }, void 0, true)
                                    }, void 0, false, {
                                        fileName: "[project]/cotation-front/src/components/dashboard/admin/users-table.tsx",
                                        lineNumber: 84,
                                        columnNumber: 190
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenu"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                                                asChild: true,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: "ghost",
                                                    size: "icon",
                                                    className: "h-8 w-8",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreHorizontal$3e$__["MoreHorizontal"], {
                                                        className: "h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/cotation-front/src/components/dashboard/admin/users-table.tsx",
                                                        lineNumber: 86,
                                                        columnNumber: 547
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/cotation-front/src/components/dashboard/admin/users-table.tsx",
                                                    lineNumber: 86,
                                                    columnNumber: 491
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/cotation-front/src/components/dashboard/admin/users-table.tsx",
                                                lineNumber: 86,
                                                columnNumber: 455
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                                                align: "end",
                                                className: "w-44",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                        onClick: {
                                                            "UsersTable[users.map() > <DropdownMenuItem>.onClick]": ()=>onEdit(user)
                                                        }["UsersTable[users.map() > <DropdownMenuItem>.onClick]"],
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__["Edit"], {
                                                                className: "h-4 w-4 mr-2"
                                                            }, void 0, false, {
                                                                fileName: "[project]/cotation-front/src/components/dashboard/admin/users-table.tsx",
                                                                lineNumber: 88,
                                                                columnNumber: 76
                                                            }, this),
                                                            "Modifier"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/cotation-front/src/components/dashboard/admin/users-table.tsx",
                                                        lineNumber: 86,
                                                        columnNumber: 666
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuSeparator"], {}, void 0, false, {
                                                        fileName: "[project]/cotation-front/src/components/dashboard/admin/users-table.tsx",
                                                        lineNumber: 88,
                                                        columnNumber: 136
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                        onClick: {
                                                            "UsersTable[users.map() > <DropdownMenuItem>.onClick]": ()=>onDelete(user)
                                                        }["UsersTable[users.map() > <DropdownMenuItem>.onClick]"],
                                                        className: "text-red-600 focus:text-red-600 focus:bg-red-50",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                className: "h-4 w-4 mr-2"
                                                            }, void 0, false, {
                                                                fileName: "[project]/cotation-front/src/components/dashboard/admin/users-table.tsx",
                                                                lineNumber: 90,
                                                                columnNumber: 136
                                                            }, this),
                                                            "Supprimer"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/cotation-front/src/components/dashboard/admin/users-table.tsx",
                                                        lineNumber: 88,
                                                        columnNumber: 161
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/cotation-front/src/components/dashboard/admin/users-table.tsx",
                                                lineNumber: 86,
                                                columnNumber: 616
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/cotation-front/src/components/dashboard/admin/users-table.tsx",
                                        lineNumber: 86,
                                        columnNumber: 441
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/cotation-front/src/components/dashboard/admin/users-table.tsx",
                                lineNumber: 82,
                                columnNumber: 1674
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/cotation-front/src/components/dashboard/admin/users-table.tsx",
                            lineNumber: 82,
                            columnNumber: 1634
                        }, this)
                    ]
                }, user.id, true, {
                    fileName: "[project]/cotation-front/src/components/dashboard/admin/users-table.tsx",
                    lineNumber: 78,
                    columnNumber: 42
                }, this)
        }["UsersTable[users.map()]"]);
        $[2] = hoveredRow;
        $[3] = onDelete;
        $[4] = onEdit;
        $[5] = onToggleStatus;
        $[6] = onViewDetails;
        $[7] = users;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    let t3;
    if ($[9] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-xl border border-border/50 bg-card overflow-hidden",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "overflow-x-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Table"], {
                    children: [
                        t1,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableBody"], {
                            children: t2
                        }, void 0, false, {
                            fileName: "[project]/cotation-front/src/components/dashboard/admin/users-table.tsx",
                            lineNumber: 104,
                            columnNumber: 130
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/cotation-front/src/components/dashboard/admin/users-table.tsx",
                    lineNumber: 104,
                    columnNumber: 119
                }, this)
            }, void 0, false, {
                fileName: "[project]/cotation-front/src/components/dashboard/admin/users-table.tsx",
                lineNumber: 104,
                columnNumber: 86
            }, this)
        }, void 0, false, {
            fileName: "[project]/cotation-front/src/components/dashboard/admin/users-table.tsx",
            lineNumber: 104,
            columnNumber: 10
        }, this);
        $[9] = t2;
        $[10] = t3;
    } else {
        t3 = $[10];
    }
    return t3;
}
_s(UsersTable, "YCJ1gdf3V0Vg5fBUc0c9GZ4kP7w=");
_c = UsersTable;
var _c;
__turbopack_context__.k.register(_c, "UsersTable");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/cotation-front/src/components/ui/select.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Select",
    ()=>Select,
    "SelectContent",
    ()=>SelectContent,
    "SelectGroup",
    ()=>SelectGroup,
    "SelectItem",
    ()=>SelectItem,
    "SelectLabel",
    ()=>SelectLabel,
    "SelectScrollDownButton",
    ()=>SelectScrollDownButton,
    "SelectScrollUpButton",
    ()=>SelectScrollUpButton,
    "SelectSeparator",
    ()=>SelectSeparator,
    "SelectTrigger",
    ()=>SelectTrigger,
    "SelectValue",
    ()=>SelectValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cotation-front/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cotation-front/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cotation-front/node_modules/@radix-ui/react-select/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__ = __turbopack_context__.i("[project]/cotation-front/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as CheckIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__ = __turbopack_context__.i("[project]/cotation-front/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDownIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUpIcon$3e$__ = __turbopack_context__.i("[project]/cotation-front/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-client] (ecmascript) <export default as ChevronUpIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cotation-front/src/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
;
function Select(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "9dfbe1e20c9c3a505a8bd018952056b9ccc95e11864b120ad7c2bccdd43c7303") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "9dfbe1e20c9c3a505a8bd018952056b9ccc95e11864b120ad7c2bccdd43c7303";
    }
    let props;
    if ($[1] !== t0) {
        ({ ...props } = t0);
        $[1] = t0;
        $[2] = props;
    } else {
        props = $[2];
    }
    let t1;
    if ($[3] !== props) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
            "data-slot": "select",
            ...props
        }, void 0, false, {
            fileName: "[project]/cotation-front/src/components/ui/select.tsx",
            lineNumber: 28,
            columnNumber: 10
        }, this);
        $[3] = props;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    return t1;
}
_c = Select;
function SelectGroup(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "9dfbe1e20c9c3a505a8bd018952056b9ccc95e11864b120ad7c2bccdd43c7303") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "9dfbe1e20c9c3a505a8bd018952056b9ccc95e11864b120ad7c2bccdd43c7303";
    }
    let props;
    if ($[1] !== t0) {
        ({ ...props } = t0);
        $[1] = t0;
        $[2] = props;
    } else {
        props = $[2];
    }
    let t1;
    if ($[3] !== props) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
            "data-slot": "select-group",
            ...props
        }, void 0, false, {
            fileName: "[project]/cotation-front/src/components/ui/select.tsx",
            lineNumber: 56,
            columnNumber: 10
        }, this);
        $[3] = props;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    return t1;
}
_c1 = SelectGroup;
function SelectValue(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "9dfbe1e20c9c3a505a8bd018952056b9ccc95e11864b120ad7c2bccdd43c7303") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "9dfbe1e20c9c3a505a8bd018952056b9ccc95e11864b120ad7c2bccdd43c7303";
    }
    let props;
    if ($[1] !== t0) {
        ({ ...props } = t0);
        $[1] = t0;
        $[2] = props;
    } else {
        props = $[2];
    }
    let t1;
    if ($[3] !== props) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Value"], {
            "data-slot": "select-value",
            ...props
        }, void 0, false, {
            fileName: "[project]/cotation-front/src/components/ui/select.tsx",
            lineNumber: 84,
            columnNumber: 10
        }, this);
        $[3] = props;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    return t1;
}
_c2 = SelectValue;
function SelectTrigger(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(14);
    if ($[0] !== "9dfbe1e20c9c3a505a8bd018952056b9ccc95e11864b120ad7c2bccdd43c7303") {
        for(let $i = 0; $i < 14; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "9dfbe1e20c9c3a505a8bd018952056b9ccc95e11864b120ad7c2bccdd43c7303";
    }
    let children;
    let className;
    let props;
    let t1;
    if ($[1] !== t0) {
        ({ className, size: t1, children, ...props } = t0);
        $[1] = t0;
        $[2] = children;
        $[3] = className;
        $[4] = props;
        $[5] = t1;
    } else {
        children = $[2];
        className = $[3];
        props = $[4];
        t1 = $[5];
    }
    const size = t1 === undefined ? "default" : t1;
    let t2;
    if ($[6] !== className) {
        t2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className);
        $[6] = className;
        $[7] = t2;
    } else {
        t2 = $[7];
    }
    let t3;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
            asChild: true,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__["ChevronDownIcon"], {
                className: "size-4 opacity-50"
            }, void 0, false, {
                fileName: "[project]/cotation-front/src/components/ui/select.tsx",
                lineNumber: 133,
                columnNumber: 47
            }, this)
        }, void 0, false, {
            fileName: "[project]/cotation-front/src/components/ui/select.tsx",
            lineNumber: 133,
            columnNumber: 10
        }, this);
        $[8] = t3;
    } else {
        t3 = $[8];
    }
    let t4;
    if ($[9] !== children || $[10] !== props || $[11] !== size || $[12] !== t2) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
            "data-slot": "select-trigger",
            "data-size": size,
            className: t2,
            ...props,
            children: [
                children,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/cotation-front/src/components/ui/select.tsx",
            lineNumber: 140,
            columnNumber: 10
        }, this);
        $[9] = children;
        $[10] = props;
        $[11] = size;
        $[12] = t2;
        $[13] = t4;
    } else {
        t4 = $[13];
    }
    return t4;
}
_c3 = SelectTrigger;
function SelectContent(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(21);
    if ($[0] !== "9dfbe1e20c9c3a505a8bd018952056b9ccc95e11864b120ad7c2bccdd43c7303") {
        for(let $i = 0; $i < 21; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "9dfbe1e20c9c3a505a8bd018952056b9ccc95e11864b120ad7c2bccdd43c7303";
    }
    let children;
    let className;
    let props;
    let t1;
    if ($[1] !== t0) {
        ({ className, children, position: t1, ...props } = t0);
        $[1] = t0;
        $[2] = children;
        $[3] = className;
        $[4] = props;
        $[5] = t1;
    } else {
        children = $[2];
        className = $[3];
        props = $[4];
        t1 = $[5];
    }
    const position = t1 === undefined ? "popper" : t1;
    const t2 = position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1";
    let t3;
    if ($[6] !== className || $[7] !== t2) {
        t3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md", t2, className);
        $[6] = className;
        $[7] = t2;
        $[8] = t3;
    } else {
        t3 = $[8];
    }
    let t4;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectScrollUpButton, {}, void 0, false, {
            fileName: "[project]/cotation-front/src/components/ui/select.tsx",
            lineNumber: 194,
            columnNumber: 10
        }, this);
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    const t5 = position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1";
    let t6;
    if ($[10] !== t5) {
        t6 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-1", t5);
        $[10] = t5;
        $[11] = t6;
    } else {
        t6 = $[11];
    }
    let t7;
    if ($[12] !== children || $[13] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Viewport"], {
            className: t6,
            children: children
        }, void 0, false, {
            fileName: "[project]/cotation-front/src/components/ui/select.tsx",
            lineNumber: 210,
            columnNumber: 10
        }, this);
        $[12] = children;
        $[13] = t6;
        $[14] = t7;
    } else {
        t7 = $[14];
    }
    let t8;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectScrollDownButton, {}, void 0, false, {
            fileName: "[project]/cotation-front/src/components/ui/select.tsx",
            lineNumber: 219,
            columnNumber: 10
        }, this);
        $[15] = t8;
    } else {
        t8 = $[15];
    }
    let t9;
    if ($[16] !== position || $[17] !== props || $[18] !== t3 || $[19] !== t7) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                "data-slot": "select-content",
                className: t3,
                position: position,
                ...props,
                children: [
                    t4,
                    t7,
                    t8
                ]
            }, void 0, true, {
                fileName: "[project]/cotation-front/src/components/ui/select.tsx",
                lineNumber: 226,
                columnNumber: 34
            }, this)
        }, void 0, false, {
            fileName: "[project]/cotation-front/src/components/ui/select.tsx",
            lineNumber: 226,
            columnNumber: 10
        }, this);
        $[16] = position;
        $[17] = props;
        $[18] = t3;
        $[19] = t7;
        $[20] = t9;
    } else {
        t9 = $[20];
    }
    return t9;
}
_c4 = SelectContent;
function SelectLabel(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "9dfbe1e20c9c3a505a8bd018952056b9ccc95e11864b120ad7c2bccdd43c7303") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "9dfbe1e20c9c3a505a8bd018952056b9ccc95e11864b120ad7c2bccdd43c7303";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground px-2 py-1.5 text-xs", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            "data-slot": "select-label",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/cotation-front/src/components/ui/select.tsx",
            lineNumber: 269,
            columnNumber: 10
        }, this);
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c5 = SelectLabel;
function SelectItem(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(14);
    if ($[0] !== "9dfbe1e20c9c3a505a8bd018952056b9ccc95e11864b120ad7c2bccdd43c7303") {
        for(let $i = 0; $i < 14; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "9dfbe1e20c9c3a505a8bd018952056b9ccc95e11864b120ad7c2bccdd43c7303";
    }
    let children;
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, children, ...props } = t0);
        $[1] = t0;
        $[2] = children;
        $[3] = className;
        $[4] = props;
    } else {
        children = $[2];
        className = $[3];
        props = $[4];
    }
    let t1;
    if ($[5] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2", className);
        $[5] = className;
        $[6] = t1;
    } else {
        t1 = $[6];
    }
    let t2;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "absolute right-2 flex size-3.5 items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__["CheckIcon"], {
                    className: "size-4"
                }, void 0, false, {
                    fileName: "[project]/cotation-front/src/components/ui/select.tsx",
                    lineNumber: 314,
                    columnNumber: 118
                }, this)
            }, void 0, false, {
                fileName: "[project]/cotation-front/src/components/ui/select.tsx",
                lineNumber: 314,
                columnNumber: 87
            }, this)
        }, void 0, false, {
            fileName: "[project]/cotation-front/src/components/ui/select.tsx",
            lineNumber: 314,
            columnNumber: 10
        }, this);
        $[7] = t2;
    } else {
        t2 = $[7];
    }
    let t3;
    if ($[8] !== children) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemText"], {
            children: children
        }, void 0, false, {
            fileName: "[project]/cotation-front/src/components/ui/select.tsx",
            lineNumber: 321,
            columnNumber: 10
        }, this);
        $[8] = children;
        $[9] = t3;
    } else {
        t3 = $[9];
    }
    let t4;
    if ($[10] !== props || $[11] !== t1 || $[12] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"], {
            "data-slot": "select-item",
            className: t1,
            ...props,
            children: [
                t2,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/cotation-front/src/components/ui/select.tsx",
            lineNumber: 329,
            columnNumber: 10
        }, this);
        $[10] = props;
        $[11] = t1;
        $[12] = t3;
        $[13] = t4;
    } else {
        t4 = $[13];
    }
    return t4;
}
_c6 = SelectItem;
function SelectSeparator(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "9dfbe1e20c9c3a505a8bd018952056b9ccc95e11864b120ad7c2bccdd43c7303") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "9dfbe1e20c9c3a505a8bd018952056b9ccc95e11864b120ad7c2bccdd43c7303";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-border pointer-events-none -mx-1 my-1 h-px", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {
            "data-slot": "select-separator",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/cotation-front/src/components/ui/select.tsx",
            lineNumber: 371,
            columnNumber: 10
        }, this);
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c7 = SelectSeparator;
function SelectScrollUpButton(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(10);
    if ($[0] !== "9dfbe1e20c9c3a505a8bd018952056b9ccc95e11864b120ad7c2bccdd43c7303") {
        for(let $i = 0; $i < 10; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "9dfbe1e20c9c3a505a8bd018952056b9ccc95e11864b120ad7c2bccdd43c7303";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex cursor-default items-center justify-center py-1", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUpIcon$3e$__["ChevronUpIcon"], {
            className: "size-4"
        }, void 0, false, {
            fileName: "[project]/cotation-front/src/components/ui/select.tsx",
            lineNumber: 412,
            columnNumber: 10
        }, this);
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    let t3;
    if ($[7] !== props || $[8] !== t1) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollUpButton"], {
            "data-slot": "select-scroll-up-button",
            className: t1,
            ...props,
            children: t2
        }, void 0, false, {
            fileName: "[project]/cotation-front/src/components/ui/select.tsx",
            lineNumber: 419,
            columnNumber: 10
        }, this);
        $[7] = props;
        $[8] = t1;
        $[9] = t3;
    } else {
        t3 = $[9];
    }
    return t3;
}
_c8 = SelectScrollUpButton;
function SelectScrollDownButton(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(10);
    if ($[0] !== "9dfbe1e20c9c3a505a8bd018952056b9ccc95e11864b120ad7c2bccdd43c7303") {
        for(let $i = 0; $i < 10; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "9dfbe1e20c9c3a505a8bd018952056b9ccc95e11864b120ad7c2bccdd43c7303";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex cursor-default items-center justify-center py-1", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__["ChevronDownIcon"], {
            className: "size-4"
        }, void 0, false, {
            fileName: "[project]/cotation-front/src/components/ui/select.tsx",
            lineNumber: 460,
            columnNumber: 10
        }, this);
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    let t3;
    if ($[7] !== props || $[8] !== t1) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollDownButton"], {
            "data-slot": "select-scroll-down-button",
            className: t1,
            ...props,
            children: t2
        }, void 0, false, {
            fileName: "[project]/cotation-front/src/components/ui/select.tsx",
            lineNumber: 467,
            columnNumber: 10
        }, this);
        $[7] = props;
        $[8] = t1;
        $[9] = t3;
    } else {
        t3 = $[9];
    }
    return t3;
}
_c9 = SelectScrollDownButton;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "Select");
__turbopack_context__.k.register(_c1, "SelectGroup");
__turbopack_context__.k.register(_c2, "SelectValue");
__turbopack_context__.k.register(_c3, "SelectTrigger");
__turbopack_context__.k.register(_c4, "SelectContent");
__turbopack_context__.k.register(_c5, "SelectLabel");
__turbopack_context__.k.register(_c6, "SelectItem");
__turbopack_context__.k.register(_c7, "SelectSeparator");
__turbopack_context__.k.register(_c8, "SelectScrollUpButton");
__turbopack_context__.k.register(_c9, "SelectScrollDownButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/cotation-front/src/components/dashboard/admin/users-filter.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UsersFilter",
    ()=>UsersFilter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cotation-front/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cotation-front/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cotation-front/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cotation-front/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cotation-front/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cotation-front/src/components/ui/select.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/cotation-front/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/cotation-front/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/cotation-front/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/cotation-front/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function UsersFilter(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(49);
    if ($[0] !== "85f11d36527429374a35e0eea6f661d9e44c6e69ce05924abea37a5c9ef085df") {
        for(let $i = 0; $i < 49; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "85f11d36527429374a35e0eea6f661d9e44c6e69ce05924abea37a5c9ef085df";
    }
    const { onSearch, onRoleFilter, onStatusFilter, onAddUser, totalUsers } = t0;
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [activeRole, setActiveRole] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("ALL");
    const [activeStatus, setActiveStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("ALL");
    let t1;
    if ($[1] !== onSearch) {
        t1 = ({
            "UsersFilter[handleSearch]": (value)=>{
                setSearchQuery(value);
                onSearch(value);
            }
        })["UsersFilter[handleSearch]"];
        $[1] = onSearch;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const handleSearch = t1;
    let t2;
    if ($[3] !== onRoleFilter) {
        t2 = ({
            "UsersFilter[handleRoleChange]": (value_0)=>{
                const role = value_0;
                setActiveRole(role);
                onRoleFilter(role);
            }
        })["UsersFilter[handleRoleChange]"];
        $[3] = onRoleFilter;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    const handleRoleChange = t2;
    let t3;
    if ($[5] !== onStatusFilter) {
        t3 = ({
            "UsersFilter[handleStatusChange]": (value_1)=>{
                const status = value_1;
                setActiveStatus(status);
                onStatusFilter(status);
            }
        })["UsersFilter[handleStatusChange]"];
        $[5] = onStatusFilter;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    const handleStatusChange = t3;
    let t4;
    if ($[7] !== onRoleFilter || $[8] !== onSearch || $[9] !== onStatusFilter) {
        t4 = ({
            "UsersFilter[clearFilters]": ()=>{
                setSearchQuery("");
                setActiveRole("ALL");
                setActiveStatus("ALL");
                onSearch("");
                onRoleFilter("ALL");
                onStatusFilter("ALL");
            }
        })["UsersFilter[clearFilters]"];
        $[7] = onRoleFilter;
        $[8] = onSearch;
        $[9] = onStatusFilter;
        $[10] = t4;
    } else {
        t4 = $[10];
    }
    const clearFilters = t4;
    const hasActiveFilters = searchQuery || activeRole !== "ALL" || activeStatus !== "ALL";
    let t5;
    let t6;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-accent/20 to-accent/5",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                className: "h-5 w-5 text-accent"
            }, void 0, false, {
                fileName: "[project]/cotation-front/src/components/dashboard/admin/users-filter.tsx",
                lineNumber: 103,
                columnNumber: 126
            }, this)
        }, void 0, false, {
            fileName: "[project]/cotation-front/src/components/dashboard/admin/users-filter.tsx",
            lineNumber: 103,
            columnNumber: 10
        }, this);
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm font-semibold text-foreground",
            children: "Liste des utilisateurs"
        }, void 0, false, {
            fileName: "[project]/cotation-front/src/components/dashboard/admin/users-filter.tsx",
            lineNumber: 104,
            columnNumber: 10
        }, this);
        $[11] = t5;
        $[12] = t6;
    } else {
        t5 = $[11];
        t6 = $[12];
    }
    const t7 = totalUsers > 1 ? "s" : "";
    let t8;
    if ($[13] !== t7 || $[14] !== totalUsers) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3",
            children: [
                t5,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        t6,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-muted-foreground",
                            children: [
                                totalUsers,
                                " résultat",
                                t7
                            ]
                        }, void 0, true, {
                            fileName: "[project]/cotation-front/src/components/dashboard/admin/users-filter.tsx",
                            lineNumber: 114,
                            columnNumber: 64
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/cotation-front/src/components/dashboard/admin/users-filter.tsx",
                    lineNumber: 114,
                    columnNumber: 55
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/cotation-front/src/components/dashboard/admin/users-filter.tsx",
            lineNumber: 114,
            columnNumber: 10
        }, this);
        $[13] = t7;
        $[14] = totalUsers;
        $[15] = t8;
    } else {
        t8 = $[15];
    }
    let t9;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
            className: "h-4 w-4 mr-2"
        }, void 0, false, {
            fileName: "[project]/cotation-front/src/components/dashboard/admin/users-filter.tsx",
            lineNumber: 123,
            columnNumber: 10
        }, this);
        $[16] = t9;
    } else {
        t9 = $[16];
    }
    let t10;
    if ($[17] !== onAddUser) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            onClick: onAddUser,
            className: "w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white shadow-lg shadow-cyan-500/20 transition-all duration-200 hover:shadow-xl hover:shadow-cyan-500/30 h-10",
            children: [
                t9,
                "Ajouter"
            ]
        }, void 0, true, {
            fileName: "[project]/cotation-front/src/components/dashboard/admin/users-filter.tsx",
            lineNumber: 130,
            columnNumber: 11
        }, this);
        $[17] = onAddUser;
        $[18] = t10;
    } else {
        t10 = $[18];
    }
    let t11;
    if ($[19] !== t10 || $[20] !== t8) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
            children: [
                t8,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/cotation-front/src/components/dashboard/admin/users-filter.tsx",
            lineNumber: 138,
            columnNumber: 11
        }, this);
        $[19] = t10;
        $[20] = t8;
        $[21] = t11;
    } else {
        t11 = $[21];
    }
    let t12;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
            className: "w-full lg:w-[150px] h-10 bg-background border-border/50 text-sm",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                placeholder: "R\xF4le"
            }, void 0, false, {
                fileName: "[project]/cotation-front/src/components/dashboard/admin/users-filter.tsx",
                lineNumber: 147,
                columnNumber: 102
            }, this)
        }, void 0, false, {
            fileName: "[project]/cotation-front/src/components/dashboard/admin/users-filter.tsx",
            lineNumber: 147,
            columnNumber: 11
        }, this);
        $[22] = t12;
    } else {
        t12 = $[22];
    }
    let t13;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                    value: "ALL",
                    children: "Tous les rôles"
                }, void 0, false, {
                    fileName: "[project]/cotation-front/src/components/dashboard/admin/users-filter.tsx",
                    lineNumber: 154,
                    columnNumber: 26
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                    value: "RESPONSABLE",
                    children: "Responsable"
                }, void 0, false, {
                    fileName: "[project]/cotation-front/src/components/dashboard/admin/users-filter.tsx",
                    lineNumber: 154,
                    columnNumber: 77
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                    value: "VALIDATEUR",
                    children: "Validateur"
                }, void 0, false, {
                    fileName: "[project]/cotation-front/src/components/dashboard/admin/users-filter.tsx",
                    lineNumber: 154,
                    columnNumber: 133
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                    value: "DEMANDEUR",
                    children: "Demandeur"
                }, void 0, false, {
                    fileName: "[project]/cotation-front/src/components/dashboard/admin/users-filter.tsx",
                    lineNumber: 154,
                    columnNumber: 187
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/cotation-front/src/components/dashboard/admin/users-filter.tsx",
            lineNumber: 154,
            columnNumber: 11
        }, this);
        $[23] = t13;
    } else {
        t13 = $[23];
    }
    let t14;
    if ($[24] !== activeRole || $[25] !== handleRoleChange) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
            value: activeRole,
            onValueChange: handleRoleChange,
            children: [
                t12,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/cotation-front/src/components/dashboard/admin/users-filter.tsx",
            lineNumber: 161,
            columnNumber: 11
        }, this);
        $[24] = activeRole;
        $[25] = handleRoleChange;
        $[26] = t14;
    } else {
        t14 = $[26];
    }
    let t15;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
            className: "w-full lg:w-[150px] h-10 bg-background border-border/50 text-sm",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                placeholder: "Statut"
            }, void 0, false, {
                fileName: "[project]/cotation-front/src/components/dashboard/admin/users-filter.tsx",
                lineNumber: 170,
                columnNumber: 102
            }, this)
        }, void 0, false, {
            fileName: "[project]/cotation-front/src/components/dashboard/admin/users-filter.tsx",
            lineNumber: 170,
            columnNumber: 11
        }, this);
        $[27] = t15;
    } else {
        t15 = $[27];
    }
    let t16;
    if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                    value: "ALL",
                    children: "Tous les statuts"
                }, void 0, false, {
                    fileName: "[project]/cotation-front/src/components/dashboard/admin/users-filter.tsx",
                    lineNumber: 177,
                    columnNumber: 26
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                    value: "ACTIVE",
                    children: "Actif"
                }, void 0, false, {
                    fileName: "[project]/cotation-front/src/components/dashboard/admin/users-filter.tsx",
                    lineNumber: 177,
                    columnNumber: 79
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                    value: "INACTIVE",
                    children: "Inactif"
                }, void 0, false, {
                    fileName: "[project]/cotation-front/src/components/dashboard/admin/users-filter.tsx",
                    lineNumber: 177,
                    columnNumber: 124
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/cotation-front/src/components/dashboard/admin/users-filter.tsx",
            lineNumber: 177,
            columnNumber: 11
        }, this);
        $[28] = t16;
    } else {
        t16 = $[28];
    }
    let t17;
    if ($[29] !== activeStatus || $[30] !== handleStatusChange) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
            value: activeStatus,
            onValueChange: handleStatusChange,
            children: [
                t15,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/cotation-front/src/components/dashboard/admin/users-filter.tsx",
            lineNumber: 184,
            columnNumber: 11
        }, this);
        $[29] = activeStatus;
        $[30] = handleStatusChange;
        $[31] = t17;
    } else {
        t17 = $[31];
    }
    let t18;
    if ($[32] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
            className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground pointer-events-none"
        }, void 0, false, {
            fileName: "[project]/cotation-front/src/components/dashboard/admin/users-filter.tsx",
            lineNumber: 193,
            columnNumber: 11
        }, this);
        $[32] = t18;
    } else {
        t18 = $[32];
    }
    let t19;
    if ($[33] !== handleSearch) {
        t19 = ({
            "UsersFilter[<Input>.onChange]": (e)=>handleSearch(e.target.value)
        })["UsersFilter[<Input>.onChange]"];
        $[33] = handleSearch;
        $[34] = t19;
    } else {
        t19 = $[34];
    }
    let t20;
    if ($[35] !== searchQuery || $[36] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative flex-1",
            children: [
                t18,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                    placeholder: "Rechercher par nom, email, t\xE9l\xE9phone...",
                    value: searchQuery,
                    onChange: t19,
                    className: "h-10 pl-10 bg-background border-border/50 focus:border-accent/50 focus:ring-accent/20 text-sm"
                }, void 0, false, {
                    fileName: "[project]/cotation-front/src/components/dashboard/admin/users-filter.tsx",
                    lineNumber: 210,
                    columnNumber: 49
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/cotation-front/src/components/dashboard/admin/users-filter.tsx",
            lineNumber: 210,
            columnNumber: 11
        }, this);
        $[35] = searchQuery;
        $[36] = t19;
        $[37] = t20;
    } else {
        t20 = $[37];
    }
    let t21;
    if ($[38] !== clearFilters || $[39] !== hasActiveFilters) {
        t21 = hasActiveFilters && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            variant: "outline",
            size: "sm",
            onClick: clearFilters,
            className: "h-10 px-3 text-muted-foreground hover:text-foreground border-border/50 whitespace-nowrap",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                    className: "h-4 w-4 mr-1.5"
                }, void 0, false, {
                    fileName: "[project]/cotation-front/src/components/dashboard/admin/users-filter.tsx",
                    lineNumber: 219,
                    columnNumber: 191
                }, this),
                "Effacer"
            ]
        }, void 0, true, {
            fileName: "[project]/cotation-front/src/components/dashboard/admin/users-filter.tsx",
            lineNumber: 219,
            columnNumber: 31
        }, this);
        $[38] = clearFilters;
        $[39] = hasActiveFilters;
        $[40] = t21;
    } else {
        t21 = $[40];
    }
    let t22;
    if ($[41] !== t14 || $[42] !== t17 || $[43] !== t20 || $[44] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-3 lg:flex-row lg:items-center",
            children: [
                t14,
                t17,
                t20,
                t21
            ]
        }, void 0, true, {
            fileName: "[project]/cotation-front/src/components/dashboard/admin/users-filter.tsx",
            lineNumber: 228,
            columnNumber: 11
        }, this);
        $[41] = t14;
        $[42] = t17;
        $[43] = t20;
        $[44] = t21;
        $[45] = t22;
    } else {
        t22 = $[45];
    }
    let t23;
    if ($[46] !== t11 || $[47] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4",
            children: [
                t11,
                t22
            ]
        }, void 0, true, {
            fileName: "[project]/cotation-front/src/components/dashboard/admin/users-filter.tsx",
            lineNumber: 239,
            columnNumber: 11
        }, this);
        $[46] = t11;
        $[47] = t22;
        $[48] = t23;
    } else {
        t23 = $[48];
    }
    return t23;
}
_s(UsersFilter, "NLemBxWkGZy3xr+cO9eXyDufD5s=");
_c = UsersFilter;
var _c;
__turbopack_context__.k.register(_c, "UsersFilter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/cotation-front/src/components/ui/dialog.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Dialog",
    ()=>Dialog,
    "DialogClose",
    ()=>DialogClose,
    "DialogContent",
    ()=>DialogContent,
    "DialogDescription",
    ()=>DialogDescription,
    "DialogFooter",
    ()=>DialogFooter,
    "DialogHeader",
    ()=>DialogHeader,
    "DialogOverlay",
    ()=>DialogOverlay,
    "DialogPortal",
    ()=>DialogPortal,
    "DialogTitle",
    ()=>DialogTitle,
    "DialogTrigger",
    ()=>DialogTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cotation-front/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cotation-front/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cotation-front/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cotation-front/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__ = __turbopack_context__.i("[project]/cotation-front/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as XIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cotation-front/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function Dialog(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "274296ef76e56881343d5e65800b997362e901167cfa96b547ac102f0ba2d3f7") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "274296ef76e56881343d5e65800b997362e901167cfa96b547ac102f0ba2d3f7";
    }
    let props;
    if ($[1] !== t0) {
        ({ ...props } = t0);
        $[1] = t0;
        $[2] = props;
    } else {
        props = $[2];
    }
    let t1;
    if ($[3] !== props) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
            "data-slot": "dialog",
            ...props
        }, void 0, false, {
            fileName: "[project]/cotation-front/src/components/ui/dialog.tsx",
            lineNumber: 28,
            columnNumber: 10
        }, this);
        $[3] = props;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    return t1;
}
_c = Dialog;
function DialogTrigger(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "274296ef76e56881343d5e65800b997362e901167cfa96b547ac102f0ba2d3f7") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "274296ef76e56881343d5e65800b997362e901167cfa96b547ac102f0ba2d3f7";
    }
    let props;
    if ($[1] !== t0) {
        ({ ...props } = t0);
        $[1] = t0;
        $[2] = props;
    } else {
        props = $[2];
    }
    let t1;
    if ($[3] !== props) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
            "data-slot": "dialog-trigger",
            ...props
        }, void 0, false, {
            fileName: "[project]/cotation-front/src/components/ui/dialog.tsx",
            lineNumber: 56,
            columnNumber: 10
        }, this);
        $[3] = props;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    return t1;
}
_c1 = DialogTrigger;
function DialogPortal(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "274296ef76e56881343d5e65800b997362e901167cfa96b547ac102f0ba2d3f7") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "274296ef76e56881343d5e65800b997362e901167cfa96b547ac102f0ba2d3f7";
    }
    let props;
    if ($[1] !== t0) {
        ({ ...props } = t0);
        $[1] = t0;
        $[2] = props;
    } else {
        props = $[2];
    }
    let t1;
    if ($[3] !== props) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
            "data-slot": "dialog-portal",
            ...props
        }, void 0, false, {
            fileName: "[project]/cotation-front/src/components/ui/dialog.tsx",
            lineNumber: 84,
            columnNumber: 10
        }, this);
        $[3] = props;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    return t1;
}
_c2 = DialogPortal;
function DialogClose(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "274296ef76e56881343d5e65800b997362e901167cfa96b547ac102f0ba2d3f7") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "274296ef76e56881343d5e65800b997362e901167cfa96b547ac102f0ba2d3f7";
    }
    let props;
    if ($[1] !== t0) {
        ({ ...props } = t0);
        $[1] = t0;
        $[2] = props;
    } else {
        props = $[2];
    }
    let t1;
    if ($[3] !== props) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
            "data-slot": "dialog-close",
            ...props
        }, void 0, false, {
            fileName: "[project]/cotation-front/src/components/ui/dialog.tsx",
            lineNumber: 112,
            columnNumber: 10
        }, this);
        $[3] = props;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    return t1;
}
_c3 = DialogClose;
function DialogOverlay(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "274296ef76e56881343d5e65800b997362e901167cfa96b547ac102f0ba2d3f7") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "274296ef76e56881343d5e65800b997362e901167cfa96b547ac102f0ba2d3f7";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"], {
            "data-slot": "dialog-overlay",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/cotation-front/src/components/ui/dialog.tsx",
            lineNumber: 152,
            columnNumber: 10
        }, this);
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c4 = DialogOverlay;
function DialogContent(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(20);
    if ($[0] !== "274296ef76e56881343d5e65800b997362e901167cfa96b547ac102f0ba2d3f7") {
        for(let $i = 0; $i < 20; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "274296ef76e56881343d5e65800b997362e901167cfa96b547ac102f0ba2d3f7";
    }
    let children;
    let className;
    let props;
    let t1;
    if ($[1] !== t0) {
        ({ className, children, showCloseButton: t1, ...props } = t0);
        $[1] = t0;
        $[2] = children;
        $[3] = className;
        $[4] = props;
        $[5] = t1;
    } else {
        children = $[2];
        className = $[3];
        props = $[4];
        t1 = $[5];
    }
    const showCloseButton = t1 === undefined ? true : t1;
    const descriptionId = __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"]();
    let t2;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogOverlay, {}, void 0, false, {
            fileName: "[project]/cotation-front/src/components/ui/dialog.tsx",
            lineNumber: 195,
            columnNumber: 10
        }, this);
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    let t3;
    if ($[7] !== className) {
        t3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg", className);
        $[7] = className;
        $[8] = t3;
    } else {
        t3 = $[8];
    }
    let t4;
    if ($[9] !== descriptionId) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            id: descriptionId,
            className: "sr-only",
            children: "Contenu de la boite de dialogue"
        }, void 0, false, {
            fileName: "[project]/cotation-front/src/components/ui/dialog.tsx",
            lineNumber: 210,
            columnNumber: 10
        }, this);
        $[9] = descriptionId;
        $[10] = t4;
    } else {
        t4 = $[10];
    }
    let t5;
    if ($[11] !== showCloseButton) {
        t5 = showCloseButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
            "data-slot": "dialog-close",
            className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__["XIcon"], {}, void 0, false, {
                    fileName: "[project]/cotation-front/src/components/ui/dialog.tsx",
                    lineNumber: 218,
                    columnNumber: 443
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "sr-only",
                    children: "Close"
                }, void 0, false, {
                    fileName: "[project]/cotation-front/src/components/ui/dialog.tsx",
                    lineNumber: 218,
                    columnNumber: 452
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/cotation-front/src/components/ui/dialog.tsx",
            lineNumber: 218,
            columnNumber: 29
        }, this);
        $[11] = showCloseButton;
        $[12] = t5;
    } else {
        t5 = $[12];
    }
    let t6;
    if ($[13] !== children || $[14] !== descriptionId || $[15] !== props || $[16] !== t3 || $[17] !== t4 || $[18] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogPortal, {
            "data-slot": "dialog-portal",
            children: [
                t2,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                    "data-slot": "dialog-content",
                    "aria-describedby": descriptionId,
                    className: t3,
                    ...props,
                    children: [
                        t4,
                        children,
                        t5
                    ]
                }, void 0, true, {
                    fileName: "[project]/cotation-front/src/components/ui/dialog.tsx",
                    lineNumber: 226,
                    columnNumber: 54
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/cotation-front/src/components/ui/dialog.tsx",
            lineNumber: 226,
            columnNumber: 10
        }, this);
        $[13] = children;
        $[14] = descriptionId;
        $[15] = props;
        $[16] = t3;
        $[17] = t4;
        $[18] = t5;
        $[19] = t6;
    } else {
        t6 = $[19];
    }
    return t6;
}
_s(DialogContent, "xlrTXb3sCt25RrTEjBG4ohKuC2Q=");
_c5 = DialogContent;
function DialogHeader(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "274296ef76e56881343d5e65800b997362e901167cfa96b547ac102f0ba2d3f7") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "274296ef76e56881343d5e65800b997362e901167cfa96b547ac102f0ba2d3f7";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col gap-2 text-center sm:text-left", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "data-slot": "dialog-header",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/cotation-front/src/components/ui/dialog.tsx",
            lineNumber: 271,
            columnNumber: 10
        }, this);
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c6 = DialogHeader;
function DialogFooter(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "274296ef76e56881343d5e65800b997362e901167cfa96b547ac102f0ba2d3f7") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "274296ef76e56881343d5e65800b997362e901167cfa96b547ac102f0ba2d3f7";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "data-slot": "dialog-footer",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/cotation-front/src/components/ui/dialog.tsx",
            lineNumber: 312,
            columnNumber: 10
        }, this);
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c7 = DialogFooter;
function DialogTitle(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "274296ef76e56881343d5e65800b997362e901167cfa96b547ac102f0ba2d3f7") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "274296ef76e56881343d5e65800b997362e901167cfa96b547ac102f0ba2d3f7";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-lg leading-none font-semibold", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
            "data-slot": "dialog-title",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/cotation-front/src/components/ui/dialog.tsx",
            lineNumber: 353,
            columnNumber: 10
        }, this);
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c8 = DialogTitle;
function DialogDescription(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "274296ef76e56881343d5e65800b997362e901167cfa96b547ac102f0ba2d3f7") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "274296ef76e56881343d5e65800b997362e901167cfa96b547ac102f0ba2d3f7";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"], {
            "data-slot": "dialog-description",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/cotation-front/src/components/ui/dialog.tsx",
            lineNumber: 394,
            columnNumber: 10
        }, this);
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c9 = DialogDescription;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "Dialog");
__turbopack_context__.k.register(_c1, "DialogTrigger");
__turbopack_context__.k.register(_c2, "DialogPortal");
__turbopack_context__.k.register(_c3, "DialogClose");
__turbopack_context__.k.register(_c4, "DialogOverlay");
__turbopack_context__.k.register(_c5, "DialogContent");
__turbopack_context__.k.register(_c6, "DialogHeader");
__turbopack_context__.k.register(_c7, "DialogFooter");
__turbopack_context__.k.register(_c8, "DialogTitle");
__turbopack_context__.k.register(_c9, "DialogDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/cotation-front/src/components/ui/label.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Label",
    ()=>Label
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cotation-front/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cotation-front/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cotation-front/node_modules/@radix-ui/react-label/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cotation-front/src/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
function Label(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "62049fefe9aad9565e424d1fc7a1063c93b1b361ae9db355690b729861b01fa6") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "62049fefe9aad9565e424d1fc7a1063c93b1b361ae9db355690b729861b01fa6";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
            "data-slot": "label",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/cotation-front/src/components/ui/label.tsx",
            lineNumber: 39,
            columnNumber: 10
        }, this);
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c = Label;
;
var _c;
__turbopack_context__.k.register(_c, "Label");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/cotation-front/src/components/dashboard/admin/add-user-modal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AddUserModal",
    ()=>AddUserModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cotation-front/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cotation-front/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cotation-front/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cotation-front/src/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cotation-front/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cotation-front/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cotation-front/src/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cotation-front/src/components/ui/select.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/cotation-front/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/cotation-front/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/cotation-front/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/cotation-front/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_context__.i("[project]/cotation-front/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-client] (ecmascript) <export default as Briefcase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/cotation-front/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/cotation-front/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
const initialFormData = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    region: "",
    fonction: "",
    role: "DEMANDEUR"
};
function AddUserModal(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(138);
    if ($[0] !== "78b2eff8d7f9130bc0b161fa690e5a386d5fa96578025397617aa234c8f383ab") {
        for(let $i = 0; $i < 138; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "78b2eff8d7f9130bc0b161fa690e5a386d5fa96578025397617aa234c8f383ab";
    }
    const { open, onOpenChange, onSubmit } = t0;
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialFormData);
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {};
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    let t2;
    if ($[2] !== formData.email || $[3] !== formData.firstName || $[4] !== formData.fonction || $[5] !== formData.lastName || $[6] !== formData.phone || $[7] !== formData.region) {
        t2 = ({
            "AddUserModal[validateForm]": ()=>{
                const newErrors = {};
                if (!formData.firstName.trim()) {
                    newErrors.firstName = "Le pr\xE9nom est requis";
                }
                if (!formData.lastName.trim()) {
                    newErrors.lastName = "Le nom est requis";
                }
                if (!formData.email.trim()) {
                    newErrors.email = "L'email est requis";
                } else {
                    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
                        newErrors.email = "Format d'email invalide";
                    }
                }
                if (!formData.phone.trim()) {
                    newErrors.phone = "Le t\xE9l\xE9phone est requis";
                }
                if (!formData.region.trim()) {
                    newErrors.region = "La r\xE9gion est requise";
                }
                if (!formData.fonction.trim()) {
                    newErrors.fonction = "La fonction est requise";
                }
                setErrors(newErrors);
                return Object.keys(newErrors).length === 0;
            }
        })["AddUserModal[validateForm]"];
        $[2] = formData.email;
        $[3] = formData.firstName;
        $[4] = formData.fonction;
        $[5] = formData.lastName;
        $[6] = formData.phone;
        $[7] = formData.region;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    const validateForm = t2;
    let t3;
    if ($[9] !== formData || $[10] !== onOpenChange || $[11] !== onSubmit || $[12] !== validateForm) {
        t3 = ({
            "AddUserModal[handleSubmit]": async (e)=>{
                e.preventDefault();
                if (!validateForm()) {
                    return;
                }
                setIsSubmitting(true);
                await new Promise(_temp);
                onSubmit(formData);
                setFormData(initialFormData);
                setErrors({});
                setIsSubmitting(false);
                onOpenChange(false);
            }
        })["AddUserModal[handleSubmit]"];
        $[9] = formData;
        $[10] = onOpenChange;
        $[11] = onSubmit;
        $[12] = validateForm;
        $[13] = t3;
    } else {
        t3 = $[13];
    }
    const handleSubmit = t3;
    let t4;
    if ($[14] !== errors) {
        t4 = ({
            "AddUserModal[handleChange]": (field, value)=>{
                setFormData({
                    "AddUserModal[handleChange > setFormData()]": (prev)=>({
                            ...prev,
                            [field]: value
                        })
                }["AddUserModal[handleChange > setFormData()]"]);
                if (errors[field]) {
                    setErrors({
                        "AddUserModal[handleChange > setErrors()]": (prev_0)=>({
                                ...prev_0,
                                [field]: undefined
                            })
                    }["AddUserModal[handleChange > setErrors()]"]);
                }
            }
        })["AddUserModal[handleChange]"];
        $[14] = errors;
        $[15] = t4;
    } else {
        t4 = $[15];
    }
    const handleChange = t4;
    let t5;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
            className: "px-6 pt-6 pb-4 bg-gradient-to-br from-accent/10 via-accent/5 to-transparent",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                    className: "text-xl font-semibold flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                className: "h-5 w-5 text-accent"
                            }, void 0, false, {
                                fileName: "[project]/cotation-front/src/components/dashboard/admin/add-user-modal.tsx",
                                lineNumber: 154,
                                columnNumber: 267
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/cotation-front/src/components/dashboard/admin/add-user-modal.tsx",
                            lineNumber: 154,
                            columnNumber: 183
                        }, this),
                        "Ajouter un utilisateur"
                    ]
                }, void 0, true, {
                    fileName: "[project]/cotation-front/src/components/dashboard/admin/add-user-modal.tsx",
                    lineNumber: 154,
                    columnNumber: 112
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                    className: "text-muted-foreground",
                    children: "Remplissez les informations pour créer un nouveau compte utilisateur."
                }, void 0, false, {
                    fileName: "[project]/cotation-front/src/components/dashboard/admin/add-user-modal.tsx",
                    lineNumber: 154,
                    columnNumber: 349
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/cotation-front/src/components/dashboard/admin/add-user-modal.tsx",
            lineNumber: 154,
            columnNumber: 10
        }, this);
        $[16] = t5;
    } else {
        t5 = $[16];
    }
    let t6;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            htmlFor: "firstName",
            className: "text-sm font-medium",
            children: "Prénom"
        }, void 0, false, {
            fileName: "[project]/cotation-front/src/components/dashboard/admin/add-user-modal.tsx",
            lineNumber: 161,
            columnNumber: 10
        }, this);
        $[17] = t6;
    } else {
        t6 = $[17];
    }
    let t7;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
            className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
        }, void 0, false, {
            fileName: "[project]/cotation-front/src/components/dashboard/admin/add-user-modal.tsx",
            lineNumber: 168,
            columnNumber: 10
        }, this);
        $[18] = t7;
    } else {
        t7 = $[18];
    }
    let t8;
    if ($[19] !== handleChange) {
        t8 = ({
            "AddUserModal[<Input>.onChange]": (e_0)=>handleChange("firstName", e_0.target.value)
        })["AddUserModal[<Input>.onChange]"];
        $[19] = handleChange;
        $[20] = t8;
    } else {
        t8 = $[20];
    }
    const t9 = `pl-10 ${errors.firstName ? "border-red-500 focus:ring-red-500" : ""}`;
    let t10;
    if ($[21] !== formData.firstName || $[22] !== t8 || $[23] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative",
            children: [
                t7,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                    id: "firstName",
                    placeholder: "Jean",
                    value: formData.firstName,
                    onChange: t8,
                    className: t9
                }, void 0, false, {
                    fileName: "[project]/cotation-front/src/components/dashboard/admin/add-user-modal.tsx",
                    lineNumber: 186,
                    columnNumber: 41
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/cotation-front/src/components/dashboard/admin/add-user-modal.tsx",
            lineNumber: 186,
            columnNumber: 11
        }, this);
        $[21] = formData.firstName;
        $[22] = t8;
        $[23] = t9;
        $[24] = t10;
    } else {
        t10 = $[24];
    }
    let t11;
    if ($[25] !== errors.firstName) {
        t11 = errors.firstName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-red-500",
            children: errors.firstName
        }, void 0, false, {
            fileName: "[project]/cotation-front/src/components/dashboard/admin/add-user-modal.tsx",
            lineNumber: 196,
            columnNumber: 31
        }, this);
        $[25] = errors.firstName;
        $[26] = t11;
    } else {
        t11 = $[26];
    }
    let t12;
    if ($[27] !== t10 || $[28] !== t11) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-2",
            children: [
                t6,
                t10,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/cotation-front/src/components/dashboard/admin/add-user-modal.tsx",
            lineNumber: 204,
            columnNumber: 11
        }, this);
        $[27] = t10;
        $[28] = t11;
        $[29] = t12;
    } else {
        t12 = $[29];
    }
    let t13;
    if ($[30] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            htmlFor: "lastName",
            className: "text-sm font-medium",
            children: "Nom"
        }, void 0, false, {
            fileName: "[project]/cotation-front/src/components/dashboard/admin/add-user-modal.tsx",
            lineNumber: 213,
            columnNumber: 11
        }, this);
        $[30] = t13;
    } else {
        t13 = $[30];
    }
    let t14;
    if ($[31] !== handleChange) {
        t14 = ({
            "AddUserModal[<Input>.onChange]": (e_1)=>handleChange("lastName", e_1.target.value)
        })["AddUserModal[<Input>.onChange]"];
        $[31] = handleChange;
        $[32] = t14;
    } else {
        t14 = $[32];
    }
    const t15 = errors.lastName ? "border-red-500 focus:ring-red-500" : "";
    let t16;
    if ($[33] !== formData.lastName || $[34] !== t14 || $[35] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            id: "lastName",
            placeholder: "Dupont",
            value: formData.lastName,
            onChange: t14,
            className: t15
        }, void 0, false, {
            fileName: "[project]/cotation-front/src/components/dashboard/admin/add-user-modal.tsx",
            lineNumber: 231,
            columnNumber: 11
        }, this);
        $[33] = formData.lastName;
        $[34] = t14;
        $[35] = t15;
        $[36] = t16;
    } else {
        t16 = $[36];
    }
    let t17;
    if ($[37] !== errors.lastName) {
        t17 = errors.lastName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-red-500",
            children: errors.lastName
        }, void 0, false, {
            fileName: "[project]/cotation-front/src/components/dashboard/admin/add-user-modal.tsx",
            lineNumber: 241,
            columnNumber: 30
        }, this);
        $[37] = errors.lastName;
        $[38] = t17;
    } else {
        t17 = $[38];
    }
    let t18;
    if ($[39] !== t16 || $[40] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-2",
            children: [
                t13,
                t16,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/cotation-front/src/components/dashboard/admin/add-user-modal.tsx",
            lineNumber: 249,
            columnNumber: 11
        }, this);
        $[39] = t16;
        $[40] = t17;
        $[41] = t18;
    } else {
        t18 = $[41];
    }
    let t19;
    if ($[42] !== t12 || $[43] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-2 gap-4",
            children: [
                t12,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/cotation-front/src/components/dashboard/admin/add-user-modal.tsx",
            lineNumber: 258,
            columnNumber: 11
        }, this);
        $[42] = t12;
        $[43] = t18;
        $[44] = t19;
    } else {
        t19 = $[44];
    }
    let t20;
    if ($[45] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            htmlFor: "email",
            className: "text-sm font-medium",
            children: "Adresse email"
        }, void 0, false, {
            fileName: "[project]/cotation-front/src/components/dashboard/admin/add-user-modal.tsx",
            lineNumber: 267,
            columnNumber: 11
        }, this);
        $[45] = t20;
    } else {
        t20 = $[45];
    }
    let t21;
    if ($[46] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
            className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
        }, void 0, false, {
            fileName: "[project]/cotation-front/src/components/dashboard/admin/add-user-modal.tsx",
            lineNumber: 274,
            columnNumber: 11
        }, this);
        $[46] = t21;
    } else {
        t21 = $[46];
    }
    let t22;
    if ($[47] !== handleChange) {
        t22 = ({
            "AddUserModal[<Input>.onChange]": (e_2)=>handleChange("email", e_2.target.value)
        })["AddUserModal[<Input>.onChange]"];
        $[47] = handleChange;
        $[48] = t22;
    } else {
        t22 = $[48];
    }
    const t23 = `pl-10 ${errors.email ? "border-red-500 focus:ring-red-500" : ""}`;
    let t24;
    if ($[49] !== formData.email || $[50] !== t22 || $[51] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative",
            children: [
                t21,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                    id: "email",
                    type: "email",
                    placeholder: "jean.dupont@entreprise.com",
                    value: formData.email,
                    onChange: t22,
                    className: t23
                }, void 0, false, {
                    fileName: "[project]/cotation-front/src/components/dashboard/admin/add-user-modal.tsx",
                    lineNumber: 292,
                    columnNumber: 42
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/cotation-front/src/components/dashboard/admin/add-user-modal.tsx",
            lineNumber: 292,
            columnNumber: 11
        }, this);
        $[49] = formData.email;
        $[50] = t22;
        $[51] = t23;
        $[52] = t24;
    } else {
        t24 = $[52];
    }
    let t25;
    if ($[53] !== errors.email) {
        t25 = errors.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-red-500",
            children: errors.email
        }, void 0, false, {
            fileName: "[project]/cotation-front/src/components/dashboard/admin/add-user-modal.tsx",
            lineNumber: 302,
            columnNumber: 27
        }, this);
        $[53] = errors.email;
        $[54] = t25;
    } else {
        t25 = $[54];
    }
    let t26;
    if ($[55] !== t24 || $[56] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-2",
            children: [
                t20,
                t24,
                t25
            ]
        }, void 0, true, {
            fileName: "[project]/cotation-front/src/components/dashboard/admin/add-user-modal.tsx",
            lineNumber: 310,
            columnNumber: 11
        }, this);
        $[55] = t24;
        $[56] = t25;
        $[57] = t26;
    } else {
        t26 = $[57];
    }
    let t27;
    if ($[58] === Symbol.for("react.memo_cache_sentinel")) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            htmlFor: "phone",
            className: "text-sm font-medium",
            children: "Téléphone"
        }, void 0, false, {
            fileName: "[project]/cotation-front/src/components/dashboard/admin/add-user-modal.tsx",
            lineNumber: 319,
            columnNumber: 11
        }, this);
        $[58] = t27;
    } else {
        t27 = $[58];
    }
    let t28;
    if ($[59] === Symbol.for("react.memo_cache_sentinel")) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
            className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
        }, void 0, false, {
            fileName: "[project]/cotation-front/src/components/dashboard/admin/add-user-modal.tsx",
            lineNumber: 326,
            columnNumber: 11
        }, this);
        $[59] = t28;
    } else {
        t28 = $[59];
    }
    let t29;
    if ($[60] !== handleChange) {
        t29 = ({
            "AddUserModal[<Input>.onChange]": (e_3)=>handleChange("phone", e_3.target.value)
        })["AddUserModal[<Input>.onChange]"];
        $[60] = handleChange;
        $[61] = t29;
    } else {
        t29 = $[61];
    }
    const t30 = `pl-10 ${errors.phone ? "border-red-500 focus:ring-red-500" : ""}`;
    let t31;
    if ($[62] !== formData.phone || $[63] !== t29 || $[64] !== t30) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative",
            children: [
                t28,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                    id: "phone",
                    placeholder: "+33 6 12 34 56 78",
                    value: formData.phone,
                    onChange: t29,
                    className: t30
                }, void 0, false, {
                    fileName: "[project]/cotation-front/src/components/dashboard/admin/add-user-modal.tsx",
                    lineNumber: 344,
                    columnNumber: 42
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/cotation-front/src/components/dashboard/admin/add-user-modal.tsx",
            lineNumber: 344,
            columnNumber: 11
        }, this);
        $[62] = formData.phone;
        $[63] = t29;
        $[64] = t30;
        $[65] = t31;
    } else {
        t31 = $[65];
    }
    let t32;
    if ($[66] !== errors.phone) {
        t32 = errors.phone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-red-500",
            children: errors.phone
        }, void 0, false, {
            fileName: "[project]/cotation-front/src/components/dashboard/admin/add-user-modal.tsx",
            lineNumber: 354,
            columnNumber: 27
        }, this);
        $[66] = errors.phone;
        $[67] = t32;
    } else {
        t32 = $[67];
    }
    let t33;
    if ($[68] !== t31 || $[69] !== t32) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-2",
            children: [
                t27,
                t31,
                t32
            ]
        }, void 0, true, {
            fileName: "[project]/cotation-front/src/components/dashboard/admin/add-user-modal.tsx",
            lineNumber: 362,
            columnNumber: 11
        }, this);
        $[68] = t31;
        $[69] = t32;
        $[70] = t33;
    } else {
        t33 = $[70];
    }
    let t34;
    if ($[71] === Symbol.for("react.memo_cache_sentinel")) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            htmlFor: "region",
            className: "text-sm font-medium",
            children: "Région"
        }, void 0, false, {
            fileName: "[project]/cotation-front/src/components/dashboard/admin/add-user-modal.tsx",
            lineNumber: 371,
            columnNumber: 11
        }, this);
        $[71] = t34;
    } else {
        t34 = $[71];
    }
    let t35;
    if ($[72] === Symbol.for("react.memo_cache_sentinel")) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
            className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
        }, void 0, false, {
            fileName: "[project]/cotation-front/src/components/dashboard/admin/add-user-modal.tsx",
            lineNumber: 378,
            columnNumber: 11
        }, this);
        $[72] = t35;
    } else {
        t35 = $[72];
    }
    let t36;
    if ($[73] !== handleChange) {
        t36 = ({
            "AddUserModal[<Input>.onChange]": (e_4)=>handleChange("region", e_4.target.value)
        })["AddUserModal[<Input>.onChange]"];
        $[73] = handleChange;
        $[74] = t36;
    } else {
        t36 = $[74];
    }
    const t37 = `pl-10 ${errors.region ? "border-red-500 focus:ring-red-500" : ""}`;
    let t38;
    if ($[75] !== formData.region || $[76] !== t36 || $[77] !== t37) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative",
            children: [
                t35,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                    id: "region",
                    placeholder: "\xCEle-de-France",
                    value: formData.region,
                    onChange: t36,
                    className: t37
                }, void 0, false, {
                    fileName: "[project]/cotation-front/src/components/dashboard/admin/add-user-modal.tsx",
                    lineNumber: 396,
                    columnNumber: 42
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/cotation-front/src/components/dashboard/admin/add-user-modal.tsx",
            lineNumber: 396,
            columnNumber: 11
        }, this);
        $[75] = formData.region;
        $[76] = t36;
        $[77] = t37;
        $[78] = t38;
    } else {
        t38 = $[78];
    }
    let t39;
    if ($[79] !== errors.region) {
        t39 = errors.region && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-red-500",
            children: errors.region
        }, void 0, false, {
            fileName: "[project]/cotation-front/src/components/dashboard/admin/add-user-modal.tsx",
            lineNumber: 406,
            columnNumber: 28
        }, this);
        $[79] = errors.region;
        $[80] = t39;
    } else {
        t39 = $[80];
    }
    let t40;
    if ($[81] !== t38 || $[82] !== t39) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-2",
            children: [
                t34,
                t38,
                t39
            ]
        }, void 0, true, {
            fileName: "[project]/cotation-front/src/components/dashboard/admin/add-user-modal.tsx",
            lineNumber: 414,
            columnNumber: 11
        }, this);
        $[81] = t38;
        $[82] = t39;
        $[83] = t40;
    } else {
        t40 = $[83];
    }
    let t41;
    if ($[84] !== t33 || $[85] !== t40) {
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-2 gap-4",
            children: [
                t33,
                t40
            ]
        }, void 0, true, {
            fileName: "[project]/cotation-front/src/components/dashboard/admin/add-user-modal.tsx",
            lineNumber: 423,
            columnNumber: 11
        }, this);
        $[84] = t33;
        $[85] = t40;
        $[86] = t41;
    } else {
        t41 = $[86];
    }
    let t42;
    if ($[87] === Symbol.for("react.memo_cache_sentinel")) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            htmlFor: "fonction",
            className: "text-sm font-medium",
            children: "Fonction"
        }, void 0, false, {
            fileName: "[project]/cotation-front/src/components/dashboard/admin/add-user-modal.tsx",
            lineNumber: 432,
            columnNumber: 11
        }, this);
        $[87] = t42;
    } else {
        t42 = $[87];
    }
    let t43;
    if ($[88] === Symbol.for("react.memo_cache_sentinel")) {
        t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"], {
            className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
        }, void 0, false, {
            fileName: "[project]/cotation-front/src/components/dashboard/admin/add-user-modal.tsx",
            lineNumber: 439,
            columnNumber: 11
        }, this);
        $[88] = t43;
    } else {
        t43 = $[88];
    }
    let t44;
    if ($[89] !== handleChange) {
        t44 = ({
            "AddUserModal[<Input>.onChange]": (e_5)=>handleChange("fonction", e_5.target.value)
        })["AddUserModal[<Input>.onChange]"];
        $[89] = handleChange;
        $[90] = t44;
    } else {
        t44 = $[90];
    }
    const t45 = `pl-10 ${errors.fonction ? "border-red-500 focus:ring-red-500" : ""}`;
    let t46;
    if ($[91] !== formData.fonction || $[92] !== t44 || $[93] !== t45) {
        t46 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative",
            children: [
                t43,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                    id: "fonction",
                    placeholder: "Chef de projet",
                    value: formData.fonction,
                    onChange: t44,
                    className: t45
                }, void 0, false, {
                    fileName: "[project]/cotation-front/src/components/dashboard/admin/add-user-modal.tsx",
                    lineNumber: 457,
                    columnNumber: 42
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/cotation-front/src/components/dashboard/admin/add-user-modal.tsx",
            lineNumber: 457,
            columnNumber: 11
        }, this);
        $[91] = formData.fonction;
        $[92] = t44;
        $[93] = t45;
        $[94] = t46;
    } else {
        t46 = $[94];
    }
    let t47;
    if ($[95] !== errors.fonction) {
        t47 = errors.fonction && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-red-500",
            children: errors.fonction
        }, void 0, false, {
            fileName: "[project]/cotation-front/src/components/dashboard/admin/add-user-modal.tsx",
            lineNumber: 467,
            columnNumber: 30
        }, this);
        $[95] = errors.fonction;
        $[96] = t47;
    } else {
        t47 = $[96];
    }
    let t48;
    if ($[97] !== t46 || $[98] !== t47) {
        t48 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-2",
            children: [
                t42,
                t46,
                t47
            ]
        }, void 0, true, {
            fileName: "[project]/cotation-front/src/components/dashboard/admin/add-user-modal.tsx",
            lineNumber: 475,
            columnNumber: 11
        }, this);
        $[97] = t46;
        $[98] = t47;
        $[99] = t48;
    } else {
        t48 = $[99];
    }
    let t49;
    if ($[100] === Symbol.for("react.memo_cache_sentinel")) {
        t49 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            htmlFor: "role",
            className: "text-sm font-medium",
            children: "Rôle"
        }, void 0, false, {
            fileName: "[project]/cotation-front/src/components/dashboard/admin/add-user-modal.tsx",
            lineNumber: 484,
            columnNumber: 11
        }, this);
        $[100] = t49;
    } else {
        t49 = $[100];
    }
    let t50;
    if ($[101] !== handleChange) {
        t50 = ({
            "AddUserModal[<Select>.onValueChange]": (value_0)=>handleChange("role", value_0)
        })["AddUserModal[<Select>.onValueChange]"];
        $[101] = handleChange;
        $[102] = t50;
    } else {
        t50 = $[102];
    }
    let t51;
    if ($[103] === Symbol.for("react.memo_cache_sentinel")) {
        t51 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
            className: "w-full",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                        className: "h-4 w-4 text-muted-foreground"
                    }, void 0, false, {
                        fileName: "[project]/cotation-front/src/components/dashboard/admin/add-user-modal.tsx",
                        lineNumber: 501,
                        columnNumber: 86
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                        placeholder: "S\xE9lectionner un r\xF4le"
                    }, void 0, false, {
                        fileName: "[project]/cotation-front/src/components/dashboard/admin/add-user-modal.tsx",
                        lineNumber: 501,
                        columnNumber: 138
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/cotation-front/src/components/dashboard/admin/add-user-modal.tsx",
                lineNumber: 501,
                columnNumber: 45
            }, this)
        }, void 0, false, {
            fileName: "[project]/cotation-front/src/components/dashboard/admin/add-user-modal.tsx",
            lineNumber: 501,
            columnNumber: 11
        }, this);
        $[103] = t51;
    } else {
        t51 = $[103];
    }
    let t52;
    if ($[104] === Symbol.for("react.memo_cache_sentinel")) {
        t52 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                    value: "ADMIN",
                    children: "Admin"
                }, void 0, false, {
                    fileName: "[project]/cotation-front/src/components/dashboard/admin/add-user-modal.tsx",
                    lineNumber: 508,
                    columnNumber: 26
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                    value: "RESPONSABLE",
                    children: "Responsable"
                }, void 0, false, {
                    fileName: "[project]/cotation-front/src/components/dashboard/admin/add-user-modal.tsx",
                    lineNumber: 508,
                    columnNumber: 70
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                    value: "VALIDATEUR",
                    children: "Validateur"
                }, void 0, false, {
                    fileName: "[project]/cotation-front/src/components/dashboard/admin/add-user-modal.tsx",
                    lineNumber: 508,
                    columnNumber: 126
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                    value: "DEMANDEUR",
                    children: "Demandeur"
                }, void 0, false, {
                    fileName: "[project]/cotation-front/src/components/dashboard/admin/add-user-modal.tsx",
                    lineNumber: 508,
                    columnNumber: 180
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/cotation-front/src/components/dashboard/admin/add-user-modal.tsx",
            lineNumber: 508,
            columnNumber: 11
        }, this);
        $[104] = t52;
    } else {
        t52 = $[104];
    }
    let t53;
    if ($[105] !== formData.role || $[106] !== t50) {
        t53 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-2",
            children: [
                t49,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                    value: formData.role,
                    onValueChange: t50,
                    children: [
                        t51,
                        t52
                    ]
                }, void 0, true, {
                    fileName: "[project]/cotation-front/src/components/dashboard/admin/add-user-modal.tsx",
                    lineNumber: 515,
                    columnNumber: 43
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/cotation-front/src/components/dashboard/admin/add-user-modal.tsx",
            lineNumber: 515,
            columnNumber: 11
        }, this);
        $[105] = formData.role;
        $[106] = t50;
        $[107] = t53;
    } else {
        t53 = $[107];
    }
    let t54;
    if ($[108] !== t48 || $[109] !== t53) {
        t54 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-2 gap-4",
            children: [
                t48,
                t53
            ]
        }, void 0, true, {
            fileName: "[project]/cotation-front/src/components/dashboard/admin/add-user-modal.tsx",
            lineNumber: 524,
            columnNumber: 11
        }, this);
        $[108] = t48;
        $[109] = t53;
        $[110] = t54;
    } else {
        t54 = $[110];
    }
    let t55;
    if ($[111] !== handleSubmit || $[112] !== t19 || $[113] !== t26 || $[114] !== t41 || $[115] !== t54) {
        t55 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: handleSubmit,
            className: "px-6 py-4 space-y-4",
            children: [
                t19,
                t26,
                t41,
                t54
            ]
        }, void 0, true, {
            fileName: "[project]/cotation-front/src/components/dashboard/admin/add-user-modal.tsx",
            lineNumber: 533,
            columnNumber: 11
        }, this);
        $[111] = handleSubmit;
        $[112] = t19;
        $[113] = t26;
        $[114] = t41;
        $[115] = t54;
        $[116] = t55;
    } else {
        t55 = $[116];
    }
    let t56;
    if ($[117] !== onOpenChange) {
        t56 = ({
            "AddUserModal[<Button>.onClick]": ()=>onOpenChange(false)
        })["AddUserModal[<Button>.onClick]"];
        $[117] = onOpenChange;
        $[118] = t56;
    } else {
        t56 = $[118];
    }
    let t57;
    if ($[119] !== isSubmitting || $[120] !== t56) {
        t57 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            type: "button",
            variant: "outline",
            onClick: t56,
            disabled: isSubmitting,
            children: "Annuler"
        }, void 0, false, {
            fileName: "[project]/cotation-front/src/components/dashboard/admin/add-user-modal.tsx",
            lineNumber: 555,
            columnNumber: 11
        }, this);
        $[119] = isSubmitting;
        $[120] = t56;
        $[121] = t57;
    } else {
        t57 = $[121];
    }
    let t58;
    if ($[122] !== isSubmitting) {
        t58 = isSubmitting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                    className: "h-4 w-4 mr-2 animate-spin"
                }, void 0, false, {
                    fileName: "[project]/cotation-front/src/components/dashboard/admin/add-user-modal.tsx",
                    lineNumber: 564,
                    columnNumber: 28
                }, this),
                "Création..."
            ]
        }, void 0, true) : "Cr\xE9er l'utilisateur";
        $[122] = isSubmitting;
        $[123] = t58;
    } else {
        t58 = $[123];
    }
    let t59;
    if ($[124] !== handleSubmit || $[125] !== isSubmitting || $[126] !== t58) {
        t59 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            type: "submit",
            onClick: handleSubmit,
            disabled: isSubmitting,
            className: "bg-accent hover:bg-accent/90 text-accent-foreground",
            children: t58
        }, void 0, false, {
            fileName: "[project]/cotation-front/src/components/dashboard/admin/add-user-modal.tsx",
            lineNumber: 572,
            columnNumber: 11
        }, this);
        $[124] = handleSubmit;
        $[125] = isSubmitting;
        $[126] = t58;
        $[127] = t59;
    } else {
        t59 = $[127];
    }
    let t60;
    if ($[128] !== t57 || $[129] !== t59) {
        t60 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogFooter"], {
            className: "px-6 py-4 bg-muted/30 border-t border-border/50",
            children: [
                t57,
                t59
            ]
        }, void 0, true, {
            fileName: "[project]/cotation-front/src/components/dashboard/admin/add-user-modal.tsx",
            lineNumber: 582,
            columnNumber: 11
        }, this);
        $[128] = t57;
        $[129] = t59;
        $[130] = t60;
    } else {
        t60 = $[130];
    }
    let t61;
    if ($[131] !== t55 || $[132] !== t60) {
        t61 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
            className: "sm:max-w-[550px] p-0 gap-0 overflow-hidden",
            children: [
                t5,
                t55,
                t60
            ]
        }, void 0, true, {
            fileName: "[project]/cotation-front/src/components/dashboard/admin/add-user-modal.tsx",
            lineNumber: 591,
            columnNumber: 11
        }, this);
        $[131] = t55;
        $[132] = t60;
        $[133] = t61;
    } else {
        t61 = $[133];
    }
    let t62;
    if ($[134] !== onOpenChange || $[135] !== open || $[136] !== t61) {
        t62 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
            open: open,
            onOpenChange: onOpenChange,
            children: t61
        }, void 0, false, {
            fileName: "[project]/cotation-front/src/components/dashboard/admin/add-user-modal.tsx",
            lineNumber: 600,
            columnNumber: 11
        }, this);
        $[134] = onOpenChange;
        $[135] = open;
        $[136] = t61;
        $[137] = t62;
    } else {
        t62 = $[137];
    }
    return t62;
}
_s(AddUserModal, "VNvSGr2OqYHHLvrc7N95BBo+6OA=");
_c = AddUserModal;
function _temp(resolve) {
    return setTimeout(resolve, 1000);
}
var _c;
__turbopack_context__.k.register(_c, "AddUserModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/cotation-front/src/components/dashboard/admin/user-details-modal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UserDetailsModal",
    ()=>UserDetailsModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cotation-front/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cotation-front/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cotation-front/src/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cotation-front/src/components/ui/avatar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cotation-front/src/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cotation-front/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cotation-front/src/components/ui/scroll-area.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/cotation-front/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/cotation-front/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/cotation-front/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_context__.i("[project]/cotation-front/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-client] (ecmascript) <export default as Briefcase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/cotation-front/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/cotation-front/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__ = __turbopack_context__.i("[project]/cotation-front/node_modules/lucide-react/dist/esm/icons/user-check.js [app-client] (ecmascript) <export default as UserCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserX$3e$__ = __turbopack_context__.i("[project]/cotation-front/node_modules/lucide-react/dist/esm/icons/user-x.js [app-client] (ecmascript) <export default as UserX>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__ = __turbopack_context__.i("[project]/cotation-front/node_modules/lucide-react/dist/esm/icons/square-pen.js [app-client] (ecmascript) <export default as Edit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/cotation-front/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building$3e$__ = __turbopack_context__.i("[project]/cotation-front/node_modules/lucide-react/dist/esm/icons/building.js [app-client] (ecmascript) <export default as Building>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hash$3e$__ = __turbopack_context__.i("[project]/cotation-front/node_modules/lucide-react/dist/esm/icons/hash.js [app-client] (ecmascript) <export default as Hash>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cotation-front/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
const roleColors = {
    ADMIN: "bg-red-500/10 text-red-600 border-red-500/20",
    RESPONSABLE: "bg-purple-500/10 text-purple-600 border-purple-500/20",
    VALIDATEUR: "bg-blue-500/10 text-blue-600 border-blue-500/20",
    DEMANDEUR: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20"
};
const roleGradients = {
    ADMIN: "from-red-500 to-rose-600",
    RESPONSABLE: "from-purple-500 to-violet-600",
    VALIDATEUR: "from-blue-500 to-cyan-600",
    DEMANDEUR: "from-emerald-500 to-teal-600"
};
const roleLabels = {
    ADMIN: "Administrateur",
    RESPONSABLE: "Responsable",
    VALIDATEUR: "Validateur",
    DEMANDEUR: "Demandeur"
};
const statusColors = {
    ACTIVE: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
    INACTIVE: "bg-gray-500/10 text-gray-600 border-gray-500/20",
    PENDING: "bg-amber-500/10 text-amber-600 border-amber-500/20"
};
const statusLabels = {
    ACTIVE: "Actif",
    INACTIVE: "Inactif",
    PENDING: "En attente"
};
function getInitials(firstName, lastName) {
    return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
}
function formatDate(date) {
    return new Intl.DateTimeFormat("fr-FR", {
        day: "2-digit",
        month: "short",
        year: "numeric"
    }).format(date);
}
function UserDetailsModal(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(149);
    if ($[0] !== "4afb55b8b2a84aa01602da5762af2b82326ee50ef41ad5c2c70a0712b866ba52") {
        for(let $i = 0; $i < 149; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "4afb55b8b2a84aa01602da5762af2b82326ee50ef41ad5c2c70a0712b866ba52";
    }
    const { user, open, onOpenChange, onEdit, onToggleStatus } = t0;
    if (!user) {
        return null;
    }
    let t1;
    if ($[1] !== user.firstName || $[2] !== user.lastName) {
        t1 = getInitials(user.firstName, user.lastName);
        $[1] = user.firstName;
        $[2] = user.lastName;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const initials = t1;
    const t2 = roleGradients[user.role];
    let t3;
    if ($[4] !== t2) {
        t3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative h-20 bg-gradient-to-br", t2);
        $[4] = t2;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"
        }, void 0, false, {
            fileName: "[project]/cotation-front/src/components/dashboard/admin/user-details-modal.tsx",
            lineNumber: 97,
            columnNumber: 10
        }, this);
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hash$3e$__["Hash"], {
            className: "h-3 w-3 text-white/80"
        }, void 0, false, {
            fileName: "[project]/cotation-front/src/components/dashboard/admin/user-details-modal.tsx",
            lineNumber: 104,
            columnNumber: 10
        }, this);
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    let t6;
    if ($[8] !== initials) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute top-3 left-3 flex items-center gap-1.5 bg-white/20 backdrop-blur-sm rounded-full px-2.5 py-1",
            children: [
                t5,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-xs font-bold text-white",
                    children: initials
                }, void 0, false, {
                    fileName: "[project]/cotation-front/src/components/dashboard/admin/user-details-modal.tsx",
                    lineNumber: 111,
                    columnNumber: 133
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/cotation-front/src/components/dashboard/admin/user-details-modal.tsx",
            lineNumber: 111,
            columnNumber: 10
        }, this);
        $[8] = initials;
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    let t7;
    if ($[10] !== t3 || $[11] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t3,
            children: [
                t4,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/cotation-front/src/components/dashboard/admin/user-details-modal.tsx",
            lineNumber: 119,
            columnNumber: 10
        }, this);
        $[10] = t3;
        $[11] = t6;
        $[12] = t7;
    } else {
        t7 = $[12];
    }
    const t8 = `${user.firstName} ${user.lastName}`;
    let t9;
    if ($[13] !== t8 || $[14] !== user.avatar) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarImage"], {
            src: user.avatar,
            alt: t8
        }, void 0, false, {
            fileName: "[project]/cotation-front/src/components/dashboard/admin/user-details-modal.tsx",
            lineNumber: 129,
            columnNumber: 10
        }, this);
        $[13] = t8;
        $[14] = user.avatar;
        $[15] = t9;
    } else {
        t9 = $[15];
    }
    const t10 = roleGradients[user.role];
    let t11;
    if ($[16] !== t10) {
        t11 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-gradient-to-br text-white text-2xl font-bold", t10);
        $[16] = t10;
        $[17] = t11;
    } else {
        t11 = $[17];
    }
    let t12;
    if ($[18] !== initials || $[19] !== t11) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarFallback"], {
            className: t11,
            children: initials
        }, void 0, false, {
            fileName: "[project]/cotation-front/src/components/dashboard/admin/user-details-modal.tsx",
            lineNumber: 147,
            columnNumber: 11
        }, this);
        $[18] = initials;
        $[19] = t11;
        $[20] = t12;
    } else {
        t12 = $[20];
    }
    let t13;
    if ($[21] !== t12 || $[22] !== t9) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
            className: "h-20 w-20 border-4 border-card shadow-xl",
            children: [
                t9,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/cotation-front/src/components/dashboard/admin/user-details-modal.tsx",
            lineNumber: 156,
            columnNumber: 11
        }, this);
        $[21] = t12;
        $[22] = t9;
        $[23] = t13;
    } else {
        t13 = $[23];
    }
    const t14 = user.status === "ACTIVE" ? "bg-emerald-500" : user.status === "PENDING" ? "bg-amber-500" : "bg-gray-400";
    let t15;
    if ($[24] !== t14) {
        t15 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute bottom-0 right-0 h-5 w-5 rounded-full border-3 border-card", t14);
        $[24] = t14;
        $[25] = t15;
    } else {
        t15 = $[25];
    }
    let t16;
    if ($[26] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t15
        }, void 0, false, {
            fileName: "[project]/cotation-front/src/components/dashboard/admin/user-details-modal.tsx",
            lineNumber: 174,
            columnNumber: 11
        }, this);
        $[26] = t15;
        $[27] = t16;
    } else {
        t16 = $[27];
    }
    let t17;
    if ($[28] !== t13 || $[29] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-center -mt-10 relative z-10",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: [
                    t13,
                    t16
                ]
            }, void 0, true, {
                fileName: "[project]/cotation-front/src/components/dashboard/admin/user-details-modal.tsx",
                lineNumber: 182,
                columnNumber: 69
            }, this)
        }, void 0, false, {
            fileName: "[project]/cotation-front/src/components/dashboard/admin/user-details-modal.tsx",
            lineNumber: 182,
            columnNumber: 11
        }, this);
        $[28] = t13;
        $[29] = t16;
        $[30] = t17;
    } else {
        t17 = $[30];
    }
    let t18;
    if ($[31] !== user.firstName || $[32] !== user.lastName) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
            className: "text-xl font-bold tracking-tight",
            children: [
                user.firstName,
                " ",
                user.lastName
            ]
        }, void 0, true, {
            fileName: "[project]/cotation-front/src/components/dashboard/admin/user-details-modal.tsx",
            lineNumber: 191,
            columnNumber: 11
        }, this);
        $[31] = user.firstName;
        $[32] = user.lastName;
        $[33] = t18;
    } else {
        t18 = $[33];
    }
    let t19;
    if ($[34] !== user.fonction || $[35] !== user.region) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
            className: "text-muted-foreground text-sm",
            children: [
                user.fonction,
                " • ",
                user.region
            ]
        }, void 0, true, {
            fileName: "[project]/cotation-front/src/components/dashboard/admin/user-details-modal.tsx",
            lineNumber: 200,
            columnNumber: 11
        }, this);
        $[34] = user.fonction;
        $[35] = user.region;
        $[36] = t19;
    } else {
        t19 = $[36];
    }
    const t20 = roleColors[user.role];
    let t21;
    if ($[37] !== t20) {
        t21 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-xs font-medium", t20);
        $[37] = t20;
        $[38] = t21;
    } else {
        t21 = $[38];
    }
    let t22;
    if ($[39] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
            className: "h-3 w-3 mr-1"
        }, void 0, false, {
            fileName: "[project]/cotation-front/src/components/dashboard/admin/user-details-modal.tsx",
            lineNumber: 218,
            columnNumber: 11
        }, this);
        $[39] = t22;
    } else {
        t22 = $[39];
    }
    const t23 = roleLabels[user.role];
    let t24;
    if ($[40] !== t21 || $[41] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
            variant: "outline",
            className: t21,
            children: [
                t22,
                t23
            ]
        }, void 0, true, {
            fileName: "[project]/cotation-front/src/components/dashboard/admin/user-details-modal.tsx",
            lineNumber: 226,
            columnNumber: 11
        }, this);
        $[40] = t21;
        $[41] = t23;
        $[42] = t24;
    } else {
        t24 = $[42];
    }
    const t25 = statusColors[user.status];
    let t26;
    if ($[43] !== t25) {
        t26 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-xs font-medium", t25);
        $[43] = t25;
        $[44] = t26;
    } else {
        t26 = $[44];
    }
    const t27 = statusLabels[user.status];
    let t28;
    if ($[45] !== t26 || $[46] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
            variant: "outline",
            className: t26,
            children: t27
        }, void 0, false, {
            fileName: "[project]/cotation-front/src/components/dashboard/admin/user-details-modal.tsx",
            lineNumber: 245,
            columnNumber: 11
        }, this);
        $[45] = t26;
        $[46] = t27;
        $[47] = t28;
    } else {
        t28 = $[47];
    }
    let t29;
    if ($[48] !== t24 || $[49] !== t28) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center gap-2 mt-2",
            children: [
                t24,
                t28
            ]
        }, void 0, true, {
            fileName: "[project]/cotation-front/src/components/dashboard/admin/user-details-modal.tsx",
            lineNumber: 254,
            columnNumber: 11
        }, this);
        $[48] = t24;
        $[49] = t28;
        $[50] = t29;
    } else {
        t29 = $[50];
    }
    let t30;
    if ($[51] !== t18 || $[52] !== t19 || $[53] !== t29) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
            className: "px-5 pt-3 pb-2 text-center",
            children: [
                t18,
                t19,
                t29
            ]
        }, void 0, true, {
            fileName: "[project]/cotation-front/src/components/dashboard/admin/user-details-modal.tsx",
            lineNumber: 263,
            columnNumber: 11
        }, this);
        $[51] = t18;
        $[52] = t19;
        $[53] = t29;
        $[54] = t30;
    } else {
        t30 = $[54];
    }
    const t31 = roleGradients[user.role];
    let t32;
    if ($[55] !== t31) {
        t32 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br text-white text-xs font-bold", t31);
        $[55] = t31;
        $[56] = t32;
    } else {
        t32 = $[56];
    }
    let t33;
    if ($[57] !== initials || $[58] !== t32) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t32,
            children: initials
        }, void 0, false, {
            fileName: "[project]/cotation-front/src/components/dashboard/admin/user-details-modal.tsx",
            lineNumber: 282,
            columnNumber: 11
        }, this);
        $[57] = initials;
        $[58] = t32;
        $[59] = t33;
    } else {
        t33 = $[59];
    }
    let t34;
    if ($[60] === Symbol.for("react.memo_cache_sentinel")) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-[10px] text-muted-foreground uppercase",
            children: "Initiales"
        }, void 0, false, {
            fileName: "[project]/cotation-front/src/components/dashboard/admin/user-details-modal.tsx",
            lineNumber: 291,
            columnNumber: 11
        }, this);
        $[60] = t34;
    } else {
        t34 = $[60];
    }
    let t35;
    if ($[61] !== initials) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t34,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm font-semibold",
                    children: initials
                }, void 0, false, {
                    fileName: "[project]/cotation-front/src/components/dashboard/admin/user-details-modal.tsx",
                    lineNumber: 298,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/cotation-front/src/components/dashboard/admin/user-details-modal.tsx",
            lineNumber: 298,
            columnNumber: 11
        }, this);
        $[61] = initials;
        $[62] = t35;
    } else {
        t35 = $[62];
    }
    let t36;
    if ($[63] !== t33 || $[64] !== t35) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                t33,
                t35
            ]
        }, void 0, true, {
            fileName: "[project]/cotation-front/src/components/dashboard/admin/user-details-modal.tsx",
            lineNumber: 306,
            columnNumber: 11
        }, this);
        $[63] = t33;
        $[64] = t35;
        $[65] = t36;
    } else {
        t36 = $[65];
    }
    let t37;
    let t38;
    if ($[66] === Symbol.for("react.memo_cache_sentinel")) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-amber-500 to-orange-500",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                className: "h-3.5 w-3.5 text-white"
            }, void 0, false, {
                fileName: "[project]/cotation-front/src/components/dashboard/admin/user-details-modal.tsx",
                lineNumber: 316,
                columnNumber: 127
            }, this)
        }, void 0, false, {
            fileName: "[project]/cotation-front/src/components/dashboard/admin/user-details-modal.tsx",
            lineNumber: 316,
            columnNumber: 11
        }, this);
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-[10px] text-muted-foreground uppercase",
            children: "Créé le"
        }, void 0, false, {
            fileName: "[project]/cotation-front/src/components/dashboard/admin/user-details-modal.tsx",
            lineNumber: 317,
            columnNumber: 11
        }, this);
        $[66] = t37;
        $[67] = t38;
    } else {
        t37 = $[66];
        t38 = $[67];
    }
    let t39;
    if ($[68] !== user.createdAt) {
        t39 = formatDate(user.createdAt);
        $[68] = user.createdAt;
        $[69] = t39;
    } else {
        t39 = $[69];
    }
    let t40;
    if ($[70] !== t39) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                t37,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        t38,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm font-semibold",
                            children: t39
                        }, void 0, false, {
                            fileName: "[project]/cotation-front/src/components/dashboard/admin/user-details-modal.tsx",
                            lineNumber: 334,
                            columnNumber: 67
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/cotation-front/src/components/dashboard/admin/user-details-modal.tsx",
                    lineNumber: 334,
                    columnNumber: 57
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/cotation-front/src/components/dashboard/admin/user-details-modal.tsx",
            lineNumber: 334,
            columnNumber: 11
        }, this);
        $[70] = t39;
        $[71] = t40;
    } else {
        t40 = $[71];
    }
    let t41;
    if ($[72] !== t36 || $[73] !== t40) {
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between p-2.5 rounded-lg bg-muted/50 border border-border/50",
            children: [
                t36,
                t40
            ]
        }, void 0, true, {
            fileName: "[project]/cotation-front/src/components/dashboard/admin/user-details-modal.tsx",
            lineNumber: 342,
            columnNumber: 11
        }, this);
        $[72] = t36;
        $[73] = t40;
        $[74] = t41;
    } else {
        t41 = $[74];
    }
    let t42;
    if ($[75] === Symbol.for("react.memo_cache_sentinel")) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "text-[10px] font-semibold text-muted-foreground uppercase tracking-wider",
            children: "Contact"
        }, void 0, false, {
            fileName: "[project]/cotation-front/src/components/dashboard/admin/user-details-modal.tsx",
            lineNumber: 351,
            columnNumber: 11
        }, this);
        $[75] = t42;
    } else {
        t42 = $[75];
    }
    let t43;
    if ($[76] === Symbol.for("react.memo_cache_sentinel")) {
        t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                className: "h-3.5 w-3.5 text-white"
            }, void 0, false, {
                fileName: "[project]/cotation-front/src/components/dashboard/admin/user-details-modal.tsx",
                lineNumber: 358,
                columnNumber: 124
            }, this)
        }, void 0, false, {
            fileName: "[project]/cotation-front/src/components/dashboard/admin/user-details-modal.tsx",
            lineNumber: 358,
            columnNumber: 11
        }, this);
        $[76] = t43;
    } else {
        t43 = $[76];
    }
    let t44;
    if ($[77] === Symbol.for("react.memo_cache_sentinel")) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-[10px] text-muted-foreground",
            children: "Email"
        }, void 0, false, {
            fileName: "[project]/cotation-front/src/components/dashboard/admin/user-details-modal.tsx",
            lineNumber: 365,
            columnNumber: 11
        }, this);
        $[77] = t44;
    } else {
        t44 = $[77];
    }
    let t45;
    if ($[78] !== user.email) {
        t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2.5 p-2.5 rounded-lg bg-muted/30 border border-border/50",
            children: [
                t43,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "min-w-0 flex-1",
                    children: [
                        t44,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm font-medium truncate",
                            children: user.email
                        }, void 0, false, {
                            fileName: "[project]/cotation-front/src/components/dashboard/admin/user-details-modal.tsx",
                            lineNumber: 372,
                            columnNumber: 149
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/cotation-front/src/components/dashboard/admin/user-details-modal.tsx",
                    lineNumber: 372,
                    columnNumber: 112
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/cotation-front/src/components/dashboard/admin/user-details-modal.tsx",
            lineNumber: 372,
            columnNumber: 11
        }, this);
        $[78] = user.email;
        $[79] = t45;
    } else {
        t45 = $[79];
    }
    let t46;
    if ($[80] === Symbol.for("react.memo_cache_sentinel")) {
        t46 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                className: "h-3.5 w-3.5 text-white"
            }, void 0, false, {
                fileName: "[project]/cotation-front/src/components/dashboard/admin/user-details-modal.tsx",
                lineNumber: 380,
                columnNumber: 127
            }, this)
        }, void 0, false, {
            fileName: "[project]/cotation-front/src/components/dashboard/admin/user-details-modal.tsx",
            lineNumber: 380,
            columnNumber: 11
        }, this);
        $[80] = t46;
    } else {
        t46 = $[80];
    }
    let t47;
    if ($[81] === Symbol.for("react.memo_cache_sentinel")) {
        t47 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-[10px] text-muted-foreground",
            children: "Téléphone"
        }, void 0, false, {
            fileName: "[project]/cotation-front/src/components/dashboard/admin/user-details-modal.tsx",
            lineNumber: 387,
            columnNumber: 11
        }, this);
        $[81] = t47;
    } else {
        t47 = $[81];
    }
    let t48;
    if ($[82] !== user.phone) {
        t48 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2.5 p-2.5 rounded-lg bg-muted/30 border border-border/50",
            children: [
                t46,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "min-w-0 flex-1",
                    children: [
                        t47,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm font-medium",
                            children: user.phone
                        }, void 0, false, {
                            fileName: "[project]/cotation-front/src/components/dashboard/admin/user-details-modal.tsx",
                            lineNumber: 394,
                            columnNumber: 149
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/cotation-front/src/components/dashboard/admin/user-details-modal.tsx",
                    lineNumber: 394,
                    columnNumber: 112
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/cotation-front/src/components/dashboard/admin/user-details-modal.tsx",
            lineNumber: 394,
            columnNumber: 11
        }, this);
        $[82] = user.phone;
        $[83] = t48;
    } else {
        t48 = $[83];
    }
    let t49;
    if ($[84] !== t45 || $[85] !== t48) {
        t49 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-2",
            children: [
                t42,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 gap-2",
                    children: [
                        t45,
                        t48
                    ]
                }, void 0, true, {
                    fileName: "[project]/cotation-front/src/components/dashboard/admin/user-details-modal.tsx",
                    lineNumber: 402,
                    columnNumber: 43
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/cotation-front/src/components/dashboard/admin/user-details-modal.tsx",
            lineNumber: 402,
            columnNumber: 11
        }, this);
        $[84] = t45;
        $[85] = t48;
        $[86] = t49;
    } else {
        t49 = $[86];
    }
    let t50;
    if ($[87] === Symbol.for("react.memo_cache_sentinel")) {
        t50 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "text-[10px] font-semibold text-muted-foreground uppercase tracking-wider",
            children: "Professionnel"
        }, void 0, false, {
            fileName: "[project]/cotation-front/src/components/dashboard/admin/user-details-modal.tsx",
            lineNumber: 411,
            columnNumber: 11
        }, this);
        $[87] = t50;
    } else {
        t50 = $[87];
    }
    let t51;
    if ($[88] === Symbol.for("react.memo_cache_sentinel")) {
        t51 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
            className: "h-3.5 w-3.5 text-violet-500"
        }, void 0, false, {
            fileName: "[project]/cotation-front/src/components/dashboard/admin/user-details-modal.tsx",
            lineNumber: 418,
            columnNumber: 11
        }, this);
        $[88] = t51;
    } else {
        t51 = $[88];
    }
    let t52;
    if ($[89] === Symbol.for("react.memo_cache_sentinel")) {
        t52 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-[10px] text-muted-foreground",
            children: "Région"
        }, void 0, false, {
            fileName: "[project]/cotation-front/src/components/dashboard/admin/user-details-modal.tsx",
            lineNumber: 425,
            columnNumber: 11
        }, this);
        $[89] = t52;
    } else {
        t52 = $[89];
    }
    let t53;
    if ($[90] !== user.region) {
        t53 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 p-2 rounded-lg bg-muted/30 border border-border/50",
            children: [
                t51,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "min-w-0",
                    children: [
                        t52,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs font-medium truncate",
                            children: user.region
                        }, void 0, false, {
                            fileName: "[project]/cotation-front/src/components/dashboard/admin/user-details-modal.tsx",
                            lineNumber: 432,
                            columnNumber: 138
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/cotation-front/src/components/dashboard/admin/user-details-modal.tsx",
                    lineNumber: 432,
                    columnNumber: 108
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/cotation-front/src/components/dashboard/admin/user-details-modal.tsx",
            lineNumber: 432,
            columnNumber: 11
        }, this);
        $[90] = user.region;
        $[91] = t53;
    } else {
        t53 = $[91];
    }
    let t54;
    if ($[92] === Symbol.for("react.memo_cache_sentinel")) {
        t54 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"], {
            className: "h-3.5 w-3.5 text-rose-500"
        }, void 0, false, {
            fileName: "[project]/cotation-front/src/components/dashboard/admin/user-details-modal.tsx",
            lineNumber: 440,
            columnNumber: 11
        }, this);
        $[92] = t54;
    } else {
        t54 = $[92];
    }
    let t55;
    if ($[93] === Symbol.for("react.memo_cache_sentinel")) {
        t55 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-[10px] text-muted-foreground",
            children: "Fonction"
        }, void 0, false, {
            fileName: "[project]/cotation-front/src/components/dashboard/admin/user-details-modal.tsx",
            lineNumber: 447,
            columnNumber: 11
        }, this);
        $[93] = t55;
    } else {
        t55 = $[93];
    }
    let t56;
    if ($[94] !== user.fonction) {
        t56 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 p-2 rounded-lg bg-muted/30 border border-border/50",
            children: [
                t54,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "min-w-0",
                    children: [
                        t55,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs font-medium truncate",
                            children: user.fonction
                        }, void 0, false, {
                            fileName: "[project]/cotation-front/src/components/dashboard/admin/user-details-modal.tsx",
                            lineNumber: 454,
                            columnNumber: 138
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/cotation-front/src/components/dashboard/admin/user-details-modal.tsx",
                    lineNumber: 454,
                    columnNumber: 108
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/cotation-front/src/components/dashboard/admin/user-details-modal.tsx",
            lineNumber: 454,
            columnNumber: 11
        }, this);
        $[94] = user.fonction;
        $[95] = t56;
    } else {
        t56 = $[95];
    }
    let t57;
    if ($[96] !== t53 || $[97] !== t56) {
        t57 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-2",
            children: [
                t50,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 gap-2",
                    children: [
                        t53,
                        t56
                    ]
                }, void 0, true, {
                    fileName: "[project]/cotation-front/src/components/dashboard/admin/user-details-modal.tsx",
                    lineNumber: 462,
                    columnNumber: 43
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/cotation-front/src/components/dashboard/admin/user-details-modal.tsx",
            lineNumber: 462,
            columnNumber: 11
        }, this);
        $[96] = t53;
        $[97] = t56;
        $[98] = t57;
    } else {
        t57 = $[98];
    }
    let t58;
    if ($[99] === Symbol.for("react.memo_cache_sentinel")) {
        t58 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "text-[10px] font-semibold text-muted-foreground uppercase tracking-wider",
            children: "Hiérarchie"
        }, void 0, false, {
            fileName: "[project]/cotation-front/src/components/dashboard/admin/user-details-modal.tsx",
            lineNumber: 471,
            columnNumber: 11
        }, this);
        $[99] = t58;
    } else {
        t58 = $[99];
    }
    let t59;
    if ($[100] === Symbol.for("react.memo_cache_sentinel")) {
        t59 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
            className: "h-3.5 w-3.5 text-indigo-500"
        }, void 0, false, {
            fileName: "[project]/cotation-front/src/components/dashboard/admin/user-details-modal.tsx",
            lineNumber: 478,
            columnNumber: 11
        }, this);
        $[100] = t59;
    } else {
        t59 = $[100];
    }
    let t60;
    if ($[101] === Symbol.for("react.memo_cache_sentinel")) {
        t60 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-[10px] text-muted-foreground",
            children: "Manager"
        }, void 0, false, {
            fileName: "[project]/cotation-front/src/components/dashboard/admin/user-details-modal.tsx",
            lineNumber: 485,
            columnNumber: 11
        }, this);
        $[101] = t60;
    } else {
        t60 = $[101];
    }
    const t61 = user.managerEmail || "Non assign\xE9";
    let t62;
    if ($[102] !== t61) {
        t62 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 p-2 rounded-lg bg-muted/30 border border-border/50",
            children: [
                t59,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "min-w-0 flex-1",
                    children: [
                        t60,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs font-medium truncate",
                            children: t61
                        }, void 0, false, {
                            fileName: "[project]/cotation-front/src/components/dashboard/admin/user-details-modal.tsx",
                            lineNumber: 493,
                            columnNumber: 145
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/cotation-front/src/components/dashboard/admin/user-details-modal.tsx",
                    lineNumber: 493,
                    columnNumber: 108
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/cotation-front/src/components/dashboard/admin/user-details-modal.tsx",
            lineNumber: 493,
            columnNumber: 11
        }, this);
        $[102] = t61;
        $[103] = t62;
    } else {
        t62 = $[103];
    }
    let t63;
    if ($[104] === Symbol.for("react.memo_cache_sentinel")) {
        t63 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building$3e$__["Building"], {
            className: "h-3.5 w-3.5 text-slate-500"
        }, void 0, false, {
            fileName: "[project]/cotation-front/src/components/dashboard/admin/user-details-modal.tsx",
            lineNumber: 501,
            columnNumber: 11
        }, this);
        $[104] = t63;
    } else {
        t63 = $[104];
    }
    let t64;
    if ($[105] === Symbol.for("react.memo_cache_sentinel")) {
        t64 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-[10px] text-muted-foreground",
            children: "Directeur"
        }, void 0, false, {
            fileName: "[project]/cotation-front/src/components/dashboard/admin/user-details-modal.tsx",
            lineNumber: 508,
            columnNumber: 11
        }, this);
        $[105] = t64;
    } else {
        t64 = $[105];
    }
    const t65 = user.directorEmail || "Non assign\xE9";
    let t66;
    if ($[106] !== t65) {
        t66 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 p-2 rounded-lg bg-muted/30 border border-border/50",
            children: [
                t63,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "min-w-0 flex-1",
                    children: [
                        t64,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs font-medium truncate",
                            children: t65
                        }, void 0, false, {
                            fileName: "[project]/cotation-front/src/components/dashboard/admin/user-details-modal.tsx",
                            lineNumber: 516,
                            columnNumber: 145
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/cotation-front/src/components/dashboard/admin/user-details-modal.tsx",
                    lineNumber: 516,
                    columnNumber: 108
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/cotation-front/src/components/dashboard/admin/user-details-modal.tsx",
            lineNumber: 516,
            columnNumber: 11
        }, this);
        $[106] = t65;
        $[107] = t66;
    } else {
        t66 = $[107];
    }
    let t67;
    if ($[108] !== t62 || $[109] !== t66) {
        t67 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-2",
            children: [
                t58,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-2",
                    children: [
                        t62,
                        t66
                    ]
                }, void 0, true, {
                    fileName: "[project]/cotation-front/src/components/dashboard/admin/user-details-modal.tsx",
                    lineNumber: 524,
                    columnNumber: 43
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/cotation-front/src/components/dashboard/admin/user-details-modal.tsx",
            lineNumber: 524,
            columnNumber: 11
        }, this);
        $[108] = t62;
        $[109] = t66;
        $[110] = t67;
    } else {
        t67 = $[110];
    }
    let t68;
    if ($[111] !== t41 || $[112] !== t49 || $[113] !== t57 || $[114] !== t67) {
        t68 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollArea"], {
            className: "px-5 py-2 max-h-[45vh]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    t41,
                    t49,
                    t57,
                    t67
                ]
            }, void 0, true, {
                fileName: "[project]/cotation-front/src/components/dashboard/admin/user-details-modal.tsx",
                lineNumber: 533,
                columnNumber: 58
            }, this)
        }, void 0, false, {
            fileName: "[project]/cotation-front/src/components/dashboard/admin/user-details-modal.tsx",
            lineNumber: 533,
            columnNumber: 11
        }, this);
        $[111] = t41;
        $[112] = t49;
        $[113] = t57;
        $[114] = t67;
        $[115] = t68;
    } else {
        t68 = $[115];
    }
    let t69;
    if ($[116] !== onEdit || $[117] !== onOpenChange || $[118] !== user) {
        t69 = ({
            "UserDetailsModal[<Button>.onClick]": ()=>{
                onOpenChange(false);
                onEdit(user);
            }
        })["UserDetailsModal[<Button>.onClick]"];
        $[116] = onEdit;
        $[117] = onOpenChange;
        $[118] = user;
        $[119] = t69;
    } else {
        t69 = $[119];
    }
    let t70;
    if ($[120] === Symbol.for("react.memo_cache_sentinel")) {
        t70 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__["Edit"], {
            className: "h-3.5 w-3.5 mr-1.5"
        }, void 0, false, {
            fileName: "[project]/cotation-front/src/components/dashboard/admin/user-details-modal.tsx",
            lineNumber: 559,
            columnNumber: 11
        }, this);
        $[120] = t70;
    } else {
        t70 = $[120];
    }
    let t71;
    if ($[121] !== t69) {
        t71 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            variant: "outline",
            size: "sm",
            onClick: t69,
            className: "flex-1 h-9 text-sm",
            children: [
                t70,
                "Modifier"
            ]
        }, void 0, true, {
            fileName: "[project]/cotation-front/src/components/dashboard/admin/user-details-modal.tsx",
            lineNumber: 566,
            columnNumber: 11
        }, this);
        $[121] = t69;
        $[122] = t71;
    } else {
        t71 = $[122];
    }
    const t72 = user.status === "ACTIVE" ? "destructive" : "default";
    let t73;
    if ($[123] !== onOpenChange || $[124] !== onToggleStatus || $[125] !== user) {
        t73 = ({
            "UserDetailsModal[<Button>.onClick]": ()=>{
                onToggleStatus(user);
                onOpenChange(false);
            }
        })["UserDetailsModal[<Button>.onClick]"];
        $[123] = onOpenChange;
        $[124] = onToggleStatus;
        $[125] = user;
        $[126] = t73;
    } else {
        t73 = $[126];
    }
    const t74 = user.status !== "ACTIVE" && "bg-emerald-600 hover:bg-emerald-700";
    let t75;
    if ($[127] !== t74) {
        t75 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex-1 h-9 text-sm", t74);
        $[127] = t74;
        $[128] = t75;
    } else {
        t75 = $[128];
    }
    let t76;
    if ($[129] !== user.status) {
        t76 = user.status === "ACTIVE" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserX$3e$__["UserX"], {
                    className: "h-3.5 w-3.5 mr-1.5"
                }, void 0, false, {
                    fileName: "[project]/cotation-front/src/components/dashboard/admin/user-details-modal.tsx",
                    lineNumber: 599,
                    columnNumber: 40
                }, this),
                "Désactiver"
            ]
        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__["UserCheck"], {
                    className: "h-3.5 w-3.5 mr-1.5"
                }, void 0, false, {
                    fileName: "[project]/cotation-front/src/components/dashboard/admin/user-details-modal.tsx",
                    lineNumber: 599,
                    columnNumber: 98
                }, this),
                "Activer"
            ]
        }, void 0, true);
        $[129] = user.status;
        $[130] = t76;
    } else {
        t76 = $[130];
    }
    let t77;
    if ($[131] !== t72 || $[132] !== t73 || $[133] !== t75 || $[134] !== t76) {
        t77 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            size: "sm",
            variant: t72,
            onClick: t73,
            className: t75,
            children: t76
        }, void 0, false, {
            fileName: "[project]/cotation-front/src/components/dashboard/admin/user-details-modal.tsx",
            lineNumber: 607,
            columnNumber: 11
        }, this);
        $[131] = t72;
        $[132] = t73;
        $[133] = t75;
        $[134] = t76;
        $[135] = t77;
    } else {
        t77 = $[135];
    }
    let t78;
    if ($[136] !== t71 || $[137] !== t77) {
        t78 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "px-5 py-3 bg-muted/30 border-t border-border/50 flex items-center gap-2",
            children: [
                t71,
                t77
            ]
        }, void 0, true, {
            fileName: "[project]/cotation-front/src/components/dashboard/admin/user-details-modal.tsx",
            lineNumber: 618,
            columnNumber: 11
        }, this);
        $[136] = t71;
        $[137] = t77;
        $[138] = t78;
    } else {
        t78 = $[138];
    }
    let t79;
    if ($[139] !== t17 || $[140] !== t30 || $[141] !== t68 || $[142] !== t7 || $[143] !== t78) {
        t79 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
            className: "sm:max-w-[480px] p-0 gap-0 overflow-hidden rounded-2xl max-h-[85vh]",
            children: [
                t7,
                t17,
                t30,
                t68,
                t78
            ]
        }, void 0, true, {
            fileName: "[project]/cotation-front/src/components/dashboard/admin/user-details-modal.tsx",
            lineNumber: 627,
            columnNumber: 11
        }, this);
        $[139] = t17;
        $[140] = t30;
        $[141] = t68;
        $[142] = t7;
        $[143] = t78;
        $[144] = t79;
    } else {
        t79 = $[144];
    }
    let t80;
    if ($[145] !== onOpenChange || $[146] !== open || $[147] !== t79) {
        t80 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
            open: open,
            onOpenChange: onOpenChange,
            children: t79
        }, void 0, false, {
            fileName: "[project]/cotation-front/src/components/dashboard/admin/user-details-modal.tsx",
            lineNumber: 639,
            columnNumber: 11
        }, this);
        $[145] = onOpenChange;
        $[146] = open;
        $[147] = t79;
        $[148] = t80;
    } else {
        t80 = $[148];
    }
    return t80;
}
_c = UserDetailsModal;
var _c;
__turbopack_context__.k.register(_c, "UserDetailsModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/cotation-front/src/app/dashboard/admin/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminDashboardPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cotation-front/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cotation-front/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cotation-front/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$dashboard$2f$stats$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cotation-front/src/components/dashboard/stats-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$dashboard$2f$admin$2f$users$2d$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cotation-front/src/components/dashboard/admin/users-table.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$dashboard$2f$admin$2f$users$2d$filter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cotation-front/src/components/dashboard/admin/users-filter.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$dashboard$2f$admin$2f$add$2d$user$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cotation-front/src/components/dashboard/admin/add-user-modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$dashboard$2f$admin$2f$user$2d$details$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cotation-front/src/components/dashboard/admin/user-details-modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/cotation-front/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__ = __turbopack_context__.i("[project]/cotation-front/node_modules/lucide-react/dist/esm/icons/user-check.js [app-client] (ecmascript) <export default as UserCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserX$3e$__ = __turbopack_context__.i("[project]/cotation-front/node_modules/lucide-react/dist/esm/icons/user-x.js [app-client] (ecmascript) <export default as UserX>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
// Mock data - replace with API calls
const mockUsers = [
    {
        id: "1",
        firstName: "Jean",
        lastName: "Dupont",
        email: "jean.dupont@entreprise.com",
        phone: "+33 6 12 34 56 78",
        region: "Île-de-France",
        fonction: "Directeur Commercial",
        role: "ADMIN",
        status: "ACTIVE",
        createdAt: new Date("2024-01-15"),
        managerEmail: "sophie.martin@entreprise.com",
        directorEmail: "pierre.durand@entreprise.com"
    },
    {
        id: "2",
        firstName: "Marie",
        lastName: "Martin",
        email: "marie.martin@entreprise.com",
        phone: "+33 6 23 45 67 89",
        region: "Rhône-Alpes",
        fonction: "Chef de Projet",
        role: "RESPONSABLE",
        status: "ACTIVE",
        createdAt: new Date("2024-02-20"),
        managerEmail: "jean.dupont@entreprise.com",
        directorEmail: "pierre.durand@entreprise.com"
    },
    {
        id: "3",
        firstName: "Pierre",
        lastName: "Bernard",
        email: "pierre.bernard@entreprise.com",
        phone: "+33 6 34 56 78 90",
        region: "PACA",
        fonction: "Responsable Achats",
        role: "VALIDATEUR",
        status: "INACTIVE",
        createdAt: new Date("2024-03-10"),
        managerEmail: "marie.martin@entreprise.com",
        directorEmail: "jean.dupont@entreprise.com"
    },
    {
        id: "4",
        firstName: "Sophie",
        lastName: "Petit",
        email: "sophie.petit@entreprise.com",
        phone: "+33 6 45 67 89 01",
        region: "Bretagne",
        fonction: "Commerciale",
        role: "DEMANDEUR",
        status: "ACTIVE",
        createdAt: new Date("2024-04-05"),
        managerEmail: "marie.martin@entreprise.com",
        directorEmail: "jean.dupont@entreprise.com"
    },
    {
        id: "5",
        firstName: "Lucas",
        lastName: "Moreau",
        email: "lucas.moreau@entreprise.com",
        phone: "+33 6 56 78 90 12",
        region: "Normandie",
        fonction: "Technicien",
        role: "DEMANDEUR",
        status: "ACTIVE",
        createdAt: new Date("2024-05-18"),
        managerEmail: "pierre.bernard@entreprise.com",
        directorEmail: "marie.martin@entreprise.com"
    },
    {
        id: "6",
        firstName: "Emma",
        lastName: "Leroy",
        email: "emma.leroy@entreprise.com",
        phone: "+33 6 67 89 01 23",
        region: "Grand Est",
        fonction: "Assistante Direction",
        role: "VALIDATEUR",
        status: "ACTIVE",
        createdAt: new Date("2024-06-22"),
        managerEmail: "jean.dupont@entreprise.com",
        directorEmail: "pierre.durand@entreprise.com"
    },
    {
        id: "7",
        firstName: "Thomas",
        lastName: "Roux",
        email: "thomas.roux@entreprise.com",
        phone: "+33 6 78 90 12 34",
        region: "Nouvelle-Aquitaine",
        fonction: "Ingénieur",
        role: "RESPONSABLE",
        status: "ACTIVE",
        createdAt: new Date("2024-07-30"),
        managerEmail: "marie.martin@entreprise.com",
        directorEmail: "jean.dupont@entreprise.com"
    },
    {
        id: "8",
        firstName: "Camille",
        lastName: "David",
        email: "camille.david@entreprise.com",
        phone: "+33 6 89 01 23 45",
        region: "Occitanie",
        fonction: "Comptable",
        role: "DEMANDEUR",
        status: "INACTIVE",
        createdAt: new Date("2024-08-14"),
        managerEmail: "emma.leroy@entreprise.com",
        directorEmail: "marie.martin@entreprise.com"
    }
];
function AdminDashboardPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(53);
    if ($[0] !== "9a198123af728c40e7142d94aa8d0a6573105c51561200e4efb90c861d75ae1c") {
        for(let $i = 0; $i < 53; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "9a198123af728c40e7142d94aa8d0a6573105c51561200e4efb90c861d75ae1c";
    }
    const [users, setUsers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(mockUsers);
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [roleFilter, setRoleFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("ALL");
    const [statusFilter, setStatusFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("ALL");
    const [isAddModalOpen, setIsAddModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedUser, setSelectedUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isDetailsModalOpen, setIsDetailsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    if ($[1] !== roleFilter || $[2] !== searchQuery || $[3] !== statusFilter || $[4] !== users) {
        let t1;
        if ($[6] !== roleFilter || $[7] !== searchQuery || $[8] !== statusFilter) {
            t1 = ({
                "AdminDashboardPage[users.filter()]": (user)=>{
                    const matchesSearch = searchQuery === "" || `${user.firstName} ${user.lastName}`.toLowerCase().includes(searchQuery.toLowerCase()) || user.email.toLowerCase().includes(searchQuery.toLowerCase()) || user.phone.includes(searchQuery);
                    const matchesRole = roleFilter === "ALL" || user.role === roleFilter;
                    const matchesStatus = statusFilter === "ALL" || user.status === statusFilter;
                    return matchesSearch && matchesRole && matchesStatus;
                }
            })["AdminDashboardPage[users.filter()]"];
            $[6] = roleFilter;
            $[7] = searchQuery;
            $[8] = statusFilter;
            $[9] = t1;
        } else {
            t1 = $[9];
        }
        t0 = users.filter(t1);
        $[1] = roleFilter;
        $[2] = searchQuery;
        $[3] = statusFilter;
        $[4] = users;
        $[5] = t0;
    } else {
        t0 = $[5];
    }
    const filteredUsers = t0;
    const t1 = users.length;
    let t2;
    if ($[10] !== users) {
        t2 = users.filter(_AdminDashboardPageUsersFilter);
        $[10] = users;
        $[11] = t2;
    } else {
        t2 = $[11];
    }
    const t3 = t2.length;
    let t4;
    if ($[12] !== users) {
        t4 = users.filter(_AdminDashboardPageUsersFilter2);
        $[12] = users;
        $[13] = t4;
    } else {
        t4 = $[13];
    }
    let t5;
    if ($[14] !== t2.length || $[15] !== t4.length || $[16] !== users.length) {
        t5 = {
            total: t1,
            active: t3,
            inactive: t4.length
        };
        $[14] = t2.length;
        $[15] = t4.length;
        $[16] = users.length;
        $[17] = t5;
    } else {
        t5 = $[17];
    }
    const stats = t5;
    let t6;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = ({
            "AdminDashboardPage[handleAddUser]": (data)=>{
                const newUser = {
                    id: String(Date.now()),
                    ...data,
                    status: "ACTIVE",
                    createdAt: new Date()
                };
                setUsers({
                    "AdminDashboardPage[handleAddUser > setUsers()]": (prev)=>[
                            newUser,
                            ...prev
                        ]
                }["AdminDashboardPage[handleAddUser > setUsers()]"]);
            }
        })["AdminDashboardPage[handleAddUser]"];
        $[18] = t6;
    } else {
        t6 = $[18];
    }
    const handleAddUser = t6;
    let t7;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = ({
            "AdminDashboardPage[handleToggleStatus]": (user_0)=>{
                setUsers({
                    "AdminDashboardPage[handleToggleStatus > setUsers()]": (prev_0)=>prev_0.map({
                            "AdminDashboardPage[handleToggleStatus > setUsers() > prev_0.map()]": (u_1)=>u_1.id === user_0.id ? {
                                    ...u_1,
                                    status: u_1.status === "ACTIVE" ? "INACTIVE" : "ACTIVE"
                                } : u_1
                        }["AdminDashboardPage[handleToggleStatus > setUsers() > prev_0.map()]"])
                }["AdminDashboardPage[handleToggleStatus > setUsers()]"]);
            }
        })["AdminDashboardPage[handleToggleStatus]"];
        $[19] = t7;
    } else {
        t7 = $[19];
    }
    const handleToggleStatus = t7;
    let t8;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = ({
            "AdminDashboardPage[handleViewDetails]": (user_1)=>{
                setSelectedUser(user_1);
                setIsDetailsModalOpen(true);
            }
        })["AdminDashboardPage[handleViewDetails]"];
        $[20] = t8;
    } else {
        t8 = $[20];
    }
    const handleViewDetails = t8;
    const handleEdit = _AdminDashboardPageHandleEdit;
    let t9;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = ({
            "AdminDashboardPage[handleDelete]": (user_3)=>{
                setUsers({
                    "AdminDashboardPage[handleDelete > setUsers()]": (prev_1)=>prev_1.filter({
                            "AdminDashboardPage[handleDelete > setUsers() > prev_1.filter()]": (u_2)=>u_2.id !== user_3.id
                        }["AdminDashboardPage[handleDelete > setUsers() > prev_1.filter()]"])
                }["AdminDashboardPage[handleDelete > setUsers()]"]);
            }
        })["AdminDashboardPage[handleDelete]"];
        $[21] = t9;
    } else {
        t9 = $[21];
    }
    const handleDelete = t9;
    let t10;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-xl md:text-2xl font-bold tracking-tight text-foreground",
                    children: "Gestion des Utilisateurs"
                }, void 0, false, {
                    fileName: "[project]/cotation-front/src/app/dashboard/admin/page.tsx",
                    lineNumber: 267,
                    columnNumber: 16
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm md:text-base text-muted-foreground mt-1",
                    children: "Gérez les comptes utilisateurs, leurs rôles et leurs accès à la plateforme."
                }, void 0, false, {
                    fileName: "[project]/cotation-front/src/app/dashboard/admin/page.tsx",
                    lineNumber: 267,
                    columnNumber: 122
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/cotation-front/src/app/dashboard/admin/page.tsx",
            lineNumber: 267,
            columnNumber: 11
        }, this);
        $[22] = t10;
    } else {
        t10 = $[22];
    }
    let t11;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = {
            value: 12,
            isPositive: true
        };
        $[23] = t11;
    } else {
        t11 = $[23];
    }
    let t12;
    if ($[24] !== stats.total) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$dashboard$2f$stats$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatsCard"], {
            title: "Total Utilisateurs",
            value: stats.total,
            description: "Comptes enregistr\xE9s",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
            trend: t11
        }, void 0, false, {
            fileName: "[project]/cotation-front/src/app/dashboard/admin/page.tsx",
            lineNumber: 284,
            columnNumber: 11
        }, this);
        $[24] = stats.total;
        $[25] = t12;
    } else {
        t12 = $[25];
    }
    let t13;
    if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = {
            value: 8,
            isPositive: true
        };
        $[26] = t13;
    } else {
        t13 = $[26];
    }
    let t14;
    if ($[27] !== stats.active) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$dashboard$2f$stats$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatsCard"], {
            title: "Utilisateurs Actifs",
            value: stats.active,
            description: "Comptes actifs",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__["UserCheck"],
            trend: t13
        }, void 0, false, {
            fileName: "[project]/cotation-front/src/app/dashboard/admin/page.tsx",
            lineNumber: 302,
            columnNumber: 11
        }, this);
        $[27] = stats.active;
        $[28] = t14;
    } else {
        t14 = $[28];
    }
    let t15;
    if ($[29] !== stats.inactive) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$dashboard$2f$stats$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatsCard"], {
            title: "Utilisateurs Inactifs",
            value: stats.inactive,
            description: "Comptes d\xE9sactiv\xE9s",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserX$3e$__["UserX"]
        }, void 0, false, {
            fileName: "[project]/cotation-front/src/app/dashboard/admin/page.tsx",
            lineNumber: 310,
            columnNumber: 11
        }, this);
        $[29] = stats.inactive;
        $[30] = t15;
    } else {
        t15 = $[30];
    }
    let t16;
    if ($[31] !== t12 || $[32] !== t14 || $[33] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid gap-4 grid-cols-1 sm:grid-cols-3",
            children: [
                t12,
                t14,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/cotation-front/src/app/dashboard/admin/page.tsx",
            lineNumber: 318,
            columnNumber: 11
        }, this);
        $[31] = t12;
        $[32] = t14;
        $[33] = t15;
        $[34] = t16;
    } else {
        t16 = $[34];
    }
    let t17;
    if ($[35] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = ({
            "AdminDashboardPage[<UsersFilter>.onAddUser]": ()=>setIsAddModalOpen(true)
        })["AdminDashboardPage[<UsersFilter>.onAddUser]"];
        $[35] = t17;
    } else {
        t17 = $[35];
    }
    let t18;
    if ($[36] !== filteredUsers.length) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$dashboard$2f$admin$2f$users$2d$filter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UsersFilter"], {
            onSearch: setSearchQuery,
            onRoleFilter: setRoleFilter,
            onStatusFilter: setStatusFilter,
            onAddUser: t17,
            totalUsers: filteredUsers.length
        }, void 0, false, {
            fileName: "[project]/cotation-front/src/app/dashboard/admin/page.tsx",
            lineNumber: 337,
            columnNumber: 11
        }, this);
        $[36] = filteredUsers.length;
        $[37] = t18;
    } else {
        t18 = $[37];
    }
    let t19;
    if ($[38] !== filteredUsers) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$dashboard$2f$admin$2f$users$2d$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UsersTable"], {
                users: filteredUsers,
                onViewDetails: handleViewDetails,
                onToggleStatus: handleToggleStatus,
                onEdit: handleEdit,
                onDelete: handleDelete
            }, void 0, false, {
                fileName: "[project]/cotation-front/src/app/dashboard/admin/page.tsx",
                lineNumber: 345,
                columnNumber: 33
            }, this)
        }, void 0, false, {
            fileName: "[project]/cotation-front/src/app/dashboard/admin/page.tsx",
            lineNumber: 345,
            columnNumber: 11
        }, this);
        $[38] = filteredUsers;
        $[39] = t19;
    } else {
        t19 = $[39];
    }
    let t20;
    if ($[40] !== isAddModalOpen) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$dashboard$2f$admin$2f$add$2d$user$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AddUserModal"], {
            open: isAddModalOpen,
            onOpenChange: setIsAddModalOpen,
            onSubmit: handleAddUser
        }, void 0, false, {
            fileName: "[project]/cotation-front/src/app/dashboard/admin/page.tsx",
            lineNumber: 353,
            columnNumber: 11
        }, this);
        $[40] = isAddModalOpen;
        $[41] = t20;
    } else {
        t20 = $[41];
    }
    let t21;
    if ($[42] !== isDetailsModalOpen || $[43] !== selectedUser) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$src$2f$components$2f$dashboard$2f$admin$2f$user$2d$details$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserDetailsModal"], {
            user: selectedUser,
            open: isDetailsModalOpen,
            onOpenChange: setIsDetailsModalOpen,
            onEdit: handleEdit,
            onToggleStatus: handleToggleStatus
        }, void 0, false, {
            fileName: "[project]/cotation-front/src/app/dashboard/admin/page.tsx",
            lineNumber: 361,
            columnNumber: 11
        }, this);
        $[42] = isDetailsModalOpen;
        $[43] = selectedUser;
        $[44] = t21;
    } else {
        t21 = $[44];
    }
    let t22;
    if ($[45] !== t18 || $[46] !== t19 || $[47] !== t20 || $[48] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-xl border border-border/50 bg-card p-3 md:p-4",
            children: [
                t18,
                t19,
                t20,
                t21
            ]
        }, void 0, true, {
            fileName: "[project]/cotation-front/src/app/dashboard/admin/page.tsx",
            lineNumber: 370,
            columnNumber: 11
        }, this);
        $[45] = t18;
        $[46] = t19;
        $[47] = t20;
        $[48] = t21;
        $[49] = t22;
    } else {
        t22 = $[49];
    }
    let t23;
    if ($[50] !== t16 || $[51] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6 md:space-y-8",
            children: [
                t10,
                t16,
                t22
            ]
        }, void 0, true, {
            fileName: "[project]/cotation-front/src/app/dashboard/admin/page.tsx",
            lineNumber: 381,
            columnNumber: 11
        }, this);
        $[50] = t16;
        $[51] = t22;
        $[52] = t23;
    } else {
        t23 = $[52];
    }
    return t23;
}
_s(AdminDashboardPage, "E+rA7+2owvKBE5ytLnW6QD4CGWk=");
_c = AdminDashboardPage;
function _AdminDashboardPageHandleEdit(user_2) {
    console.log("Edit user:", user_2);
}
function _AdminDashboardPageUsersFilter2(u_0) {
    return u_0.status === "INACTIVE";
}
function _AdminDashboardPageUsersFilter(u) {
    return u.status === "ACTIVE";
}
var _c;
__turbopack_context__.k.register(_c, "AdminDashboardPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=cotation-front_src_33f3e254._.js.map