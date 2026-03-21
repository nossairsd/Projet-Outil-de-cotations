(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/cotation-front/src/lib/auth-context.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthProvider",
    ()=>AuthProvider,
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cotation-front/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cotation-front/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cotation-front/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function AuthProvider({ children }) {
    _s();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthProvider.useEffect": ()=>{
            const storedUser = localStorage.getItem('qm_user');
            if (storedUser) {
                try {
                    setUser(JSON.parse(storedUser));
                } catch (error) {
                    localStorage.removeItem('qm_user');
                }
            }
            setIsLoading(false);
        }
    }["AuthProvider.useEffect"], []);
    const login = async (email, password)=>{
        setIsLoading(true);
        try {
            await new Promise((resolve)=>setTimeout(resolve, 800));
            const testUsers = {
                'admin@quotation.com': {
                    id: '1',
                    email: 'admin@quotation.com',
                    name: 'Admin Manager',
                    phone: '+212 612345678',
                    role: 'ADMIN',
                    status: 'active',
                    region: 'Casablanca',
                    fonction: 'Administrateur',
                    createdAt: new Date('2024-01-15'),
                    avatar: undefined
                },
                'responsable@quotation.com': {
                    id: '2',
                    email: 'responsable@quotation.com',
                    name: 'Responsable Ventes',
                    phone: '+212 612345679',
                    role: 'RESPONSABLE',
                    status: 'active',
                    region: 'Rabat',
                    fonction: 'Responsable Commercial',
                    createdAt: new Date('2024-02-10'),
                    avatar: undefined
                },
                'validateur@quotation.com': {
                    id: '3',
                    email: 'validateur@quotation.com',
                    name: 'Validateur Finance',
                    phone: '+212 612345680',
                    role: 'VALIDATEUR',
                    status: 'active',
                    region: 'Fes',
                    fonction: 'Validateur Financier',
                    createdAt: new Date('2024-03-05'),
                    avatar: undefined
                },
                'demandeur@quotation.com': {
                    id: '4',
                    email: 'demandeur@quotation.com',
                    name: 'Client Demandeur',
                    phone: '+212 612345681',
                    role: 'DEMANDEUR',
                    status: 'active',
                    region: 'Marrakech',
                    fonction: 'Demandeur de Quotation',
                    createdAt: new Date('2024-04-01'),
                    avatar: undefined
                }
            };
            const foundUser = testUsers[email];
            if (!foundUser) {
                throw new Error('Identifiants invalides');
            }
            if (password !== 'password123') {
                throw new Error('Mot de passe incorrect');
            }
            setUser(foundUser);
            localStorage.setItem('qm_user', JSON.stringify(foundUser));
        } catch (error_0) {
            throw error_0;
        } finally{
            setIsLoading(false);
        }
    };
    // ← CORRIGÉ : Logout avec redirection
    const logout = ()=>{
        localStorage.removeItem('qm_user');
        localStorage.removeItem('token');
        setUser(null);
    // La redirection sera gérée par le composant qui appelle logout
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
        value: {
            user,
            isLoading,
            login,
            logout,
            isAuthenticated: user !== null
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/cotation-front/src/lib/auth-context.tsx",
        lineNumber: 110,
        columnNumber: 10
    }, this);
}
_s(AuthProvider, "YajQB7LURzRD+QP5gw0+K2TZIWA=");
_c = AuthProvider;
function useAuth() {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(1);
    if ($[0] !== "e37089c4e75d7752ffd5bc60db8bff5de7f89a2ee311f6f5924671d6974fa28a") {
        for(let $i = 0; $i < 1; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e37089c4e75d7752ffd5bc60db8bff5de7f89a2ee311f6f5924671d6974fa28a";
    }
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cotation$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}
_s1(useAuth, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "AuthProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=cotation-front_src_lib_auth-context_tsx_c286edcb._.js.map