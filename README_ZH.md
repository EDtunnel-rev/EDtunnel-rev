# EDtunnel-rev

## 部署在Cloudflare Pages

1. 观看YouTube视频教程：

   [点击观看](https://www.youtube.com/watch?v=8I-yTNHB0aw)

2. 克隆此仓库并部署到Cloudflare Pages。

## 部署在Cloudflare Worker

1. 从[这里](https://github.com/EDtunnel-rev/EDtunnel-rev/blob/main/_worker.js)复制`_worker.js`代码。

2. 或者点击以下按钮直接部署。

   [![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/EDtunnel-rev/EDtunnel-rev)

## 想省去部署步骤？

如果不想自行部署，可以使用以下链接直接获取配置（免费clash.meta订阅配置）：

`aHR0cHM6Ly9vc3MudjJyYXlzZS5jb20vcHJveGllcy9kYXRhLzIwMjMtMDctMzAvRnJFS1lvQS50eHQ=`

## UUID设置（可选）

1. 部署在Cloudflare Pages时，可以在`wrangler.toml`文件中设置UUID，变量名为`UUID`。这个文件在使用Cloudflare Pages进行部署时是推荐的配置文件。

2. 部署在Cloudflare Worker时，你可以在`_worker.js`文件中设置UUID，变量名为`userID`。同样可以使用`wrangler.toml`文件进行设置。如果不能在网页部署中设置UUID，可以通过`UUID`环境变量来配置。

注意：`UUID`是你想要设置的UUID值。`UUID`的配置支持Cloudflare Pages和Worker的所有部署方法，但具体的设置方法取决于你的部署方式。

### UUID设置示例

1. 单一UUID环境变量

   ```environment
   UUID = "你想要设置的uuid"
   ```

2. 多个UUID环境变量

   ```environment
   UUID = "uuid1,uuid2,uuid3"
   ```

   注意：UUID之间用逗号`,`分隔。
   设置多个UUID后，可以通过`https://edtunnel.pages.dev/uuid1`来获取对应的clash配置和vless://链接。

## 订阅vless://链接（可选）

1. 访问`https://edtunnel.pages.dev/你设置的uuid`来获取订阅链接。

2. 访问`https://edtunnel.pages.dev/sub/你设置的uuid`来获取订阅内容。

   注意：`你设置的uuid`是指在`UUID`环境变量或`wrangler.toml`、`_worker.js`文件中设置的UUID。当设置多个UUID时，可以使用`https://edtunnel.pages.dev/sub/uuid1`获取订阅内容（仅支持第一个UUID）。

3. 访问`https://edtunnel.pages.dev/sub/你设置的uuid/?format=clash`以获取`clash`格式的订阅内容，返回的内容将进行base64编码。

   注意：`你设置的uuid`是指你在UUID环境变量或`wrangler.toml`、`_worker.js`文件中设置的UUID。当设置多个UUID时，可以使用`https://edtunnel.pages.dev/sub/uuid1/?format=clash`来获取带有`clash`格式的订阅内容（仅支持第一个UUID）。

## 订阅Cloudflare最佳IP（纯IP）链接

1. 访问`https://edtunnel.pages.dev/bestip/你设置的uuid`来获取订阅信息。

2. 复制订阅URL链接`https://edtunnel.pages.dev/bestip/你设置的uuid`到任何你想使用的客户端（如clash/v2rayN/v2rayNG）。

3. 完成。如果有任何问题，请加入 [@edtunnel](https://t.me/edtunnel)。

## 多端口支持（可选）

   <!-- let portArray_http = [80, 8080, 8880, 2052, 2086, 2095];
	let portArray_https = [443, 8443, 2053, 2096, 2087, 2083]; -->

Cloudflare支持的端口列表请参考[官方文档](https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/ports)。

默认情况下，端口为80和443。如果你想添加更多端口，可以使用以下端口：

```text
80, 8080, 8880, 2052, 2086, 2095, 443, 8443, 2053, 2096, 2087, 2083
http 端口: 80, 8080, 8880, 2052, 2086, 2095
https 端口: 443, 8443, 2053, 2096, 2087, 2083
```

如果你在Cloudflare Pages上部署，https端口不受支持。只需将多端口节点直接使用订阅链接，订阅内容将返回所有Cloudflare支持的端口。

## proxyIP（可选）

1. 部署在Cloudflare Pages时，可以在`wrangler.toml`文件中设置proxyIP，变量名为`PROXYIP`。

2. 部署在Cloudflare Worker时，你可以在`_worker.js`文件中设置proxyIP，变量名为`proxyIP`。

注意：`proxyIP`是你想要设置的IP或域名。这意味着流量将通过代理IP路由，而不是直接连接到使用Cloudflare（CDN）的网站。如果你不设置这个变量，与Cloudflare IP的连接将被取消（或阻止）。

原因：出站TCP套接字到Cloudflare IP范围暂时被阻止，请参考[tcp-sockets文档](https://developers.cloudflare.com/workers/runtime-apis/tcp-sockets/#considerations)。

## 使用方法

首先，在浏览器中打开你的pages.dev域名`https://edtunnel.pages.dev/`，然后你会看到以下页面：
使用路径`/你设置的uuid`来获取clash配置和vless://链接。
