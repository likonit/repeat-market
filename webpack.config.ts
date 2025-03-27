import path from "path";
import webpack from "webpack";
import * as HtmlWebpackPlugin from "html-webpack-plugin";
import { Configuration as DevServerConfiguration } from "webpack-dev-server";

const devServer: DevServerConfiguration = {
    static: {
        directory: path.join(__dirname, "./dist"),
    },
    compress: true,
    historyApiFallback: true,
    open: true,
    hot: true,
    port: 9002,
};

export default function config(env: {
    mode: "production" | "development";
}): webpack.Configuration {
    return {
        mode: env.mode ?? "development",
        entry: path.resolve(__dirname, "src", "index.tsx"),
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: "bundle.[contenthash].js",
            clean: true,
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: "ts-loader",
                    exclude: "/node_modules/",
                },
                {
                    test: /\.module.css$/,
                    use: ["style-loader", "css-loader"],
                    exclude: "/node_modules/",
                },
            ],
        },
        resolve: {
            extensions: [".ts", ".tsx", ".js"],
            alias: {
                "@": path.resolve(__dirname, "src"),
            },
        },
        plugins: [
            new HtmlWebpackPlugin.default({
                template: "public/index.html",
                filename: "index.html",
                inject: "body",
            }),
        ],
        devServer: devServer,
    };
}
