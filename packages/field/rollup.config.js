import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";

export default {
    input: "src/index.tsx",
    output: [
        {
            file: "./dist/index.js",
            format: "cjs",
            exports: "named",
            sourcemap: true,
        },
        {
            file: "./dist/index.esm.js",
            format: "esm",
            exports: "named",
            sourcemap: true,
        },
    ],
    plugins: [
        resolve({ extensions: [".js", ".jsx", ".ts", ".tsx"] }),
        commonjs({
            include: /\**node_modules\**/,
        }),
        typescript({
            useTsconfigDeclarationDir: true,
            exclude: ["*.d.ts", "**/*.d.ts", "**/*.test.tsx"],
            rollupCommonJSResolveHack: true,
            clean: true,
        }),
    ],
};
