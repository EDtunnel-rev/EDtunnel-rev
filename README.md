# EDtunnel-rev

简述更新方向：

1.限流选项

2.黑白名单重新上线

3.流量混淆

4.新的HTML界面（完成）

5.自带browser基于项目

6.Trojan集成

本周末争取上线1-5。各位可以拭目以待。希望赞数超过6Kmfi6HP。

Origional version was written by **3Kmfi6HP**.

中文版本说明：https://github.com/EDtunnel-rev/EDtunnel-rev/blob/main/README_ZH.md

## Deploy in pages.dev

1. See YouTube Video:

   [https://www.youtube.com/watch?v=8I-yTNHB0aw](https://www.youtube.com/watch?v=8I-yTNHB0aw)

2. Clone this repository deploy in cloudflare pages.

## Deploy in worker.dev

1. Copy `_worker.js` code from [here](https://github.com/EDtunnel-rev/EDtunnel-rev/blob/main/_worker.js).

2. Alternatively, you can click the button below to deploy directly.

   [![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/EDtunnel-rev/EDtunnel-rev)

## Lazy to deploy

`aHR0cHM6Ly9vc3MudjJyYXlzZS5jb20vcHJveGllcy9kYXRhLzIwMjMtMDctMzAvRnJFS1lvQS50eHQ=` (free clash.meta subscribe config)

## UUID Setting (Optional)

1. When deploy in cloudflare pages, you can set uuid in `wrangler.toml` file. variable name is `UUID`. `wrangler.toml` file is also supported. (recommended) in case deploy in webpages, you can not set uuid in `wrangler.toml` file.

2. When deploy in worker.dev, you can set uuid in `_worker.js` file. variable name is `userID`. `wrangler.toml` file is also supported. (recommended) in case deploy in webpages, you can not set uuid in `wrangler.toml` file. in this case, you can also set uuid in `UUID` enviroment variable.

Note: `UUID` is the uuid you want to set. pages.dev and worker.dev all of them method supported, but depend on your deploy method.

### UUID Setting Example

1. single uuid environment variable

   ```.environment
   UUID = "uuid here your want to set"
   ```

2. multiple uuid environment variable

   ```.environment
   UUID = "uuid1,uuid2,uuid3"
   ```

   note: uuid1, uuid2, uuid3 are separated by commas`,`.
   when you set multiple uuid, you can use `https://edtunnel-rev.pages.dev/uuid1` to get the clash config and vless:// link.

## subscribe vless:// link (Optional)

1. visit `https://edtunnel-rev.pages.dev/uuid your set` to get the subscribe link.

2. visit `https://edtunnel-rev.pages.dev/sub/uuid your set` to get the subscribe content with `uuid your set` path.

   note: `uuid your set` is the uuid you set in UUID enviroment or `wrangler.toml`, `_worker.js` file.
   when you set multiple uuid, you can use `https://edtunnel-rev.pages.dev/sub/uuid1` to get the subscribe content with `uuid1` path.(only support first uuid in multiple uuid set)

3. visit `https://edtunnel-rev.pages.dev/sub/uuid your set/?format=clash` to get the subscribe content with `uuid your set` path and `clash` format. content will return with base64 encode.

   note: `uuid your set` is the uuid you set in UUID enviroment or `wrangler.toml`, `_worker.js` file.
   when you set multiple uuid, you can will use `https://edtunnel-rev.pages.dev/sub/uuid1/?format=clash` to get the subscribe content with `uuid1` path and `clash` format.(only support first uuid in multiple uuid set)

## subscribe Cloudflare bestip(pure ip) link

1. visit `https://edtunnel-rev.pages.dev/bestip/uuid your set` to get subscribe info.

2. cpoy subscribe url link `https://edtunnel-rev.pages.dev/bestip/uuid your set` to any clients(clash/v2rayN/v2rayNG) you want to use.

3. done. if have any questions please join [@edtunrev](https://t.me/edtunrev)

## multiple port support (Optional)

   <!-- let portArray_http = [80, 8080, 8880, 2052, 2086, 2095];
	let portArray_https = [443, 8443, 2053, 2096, 2087, 2083]; -->

For a list of Cloudflare supported ports, please refer to the [official documentation](https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/ports).

By default, the port is 80 and 443. If you want to add more ports, you can use the following ports:

```text
80, 8080, 8880, 2052, 2086, 2095, 443, 8443, 2053, 2096, 2087, 2083
http port: 80, 8080, 8880, 2052, 2086, 2095
https port: 443, 8443, 2053, 2096, 2087, 2083
```

if you deploy in cloudflare pages, https port is not supported. Simply add multiple ports node drictly use subscribe link, subscribe content will return all Cloudflare supported ports.

## proxyIP (Optional)

1. When deploy in cloudflare pages, you can set proxyIP in `wrangler.toml` file. variable name is `PROXYIP`.

2. When deploy in worker.dev, you can set proxyIP in `_worker.js` file. variable name is `proxyIP`.

note: `proxyIP` is the ip or domain you want to set. this means that the proxyIP is used to route traffic through a proxy rather than directly to a website that is using Cloudflare's (CDN). if you don't set this variable, connection to the Cloudflare IP will be cancelled (or blocked)...

resons: Outbound TCP sockets to Cloudflare IP ranges are temporarily blocked, please refer to the [tcp-sockets documentation](https://developers.cloudflare.com/workers/runtime-apis/tcp-sockets/#considerations)

## Usage

frist, open your pages.dev domain `https://edtunnel-rev.pages.dev/` in your browser, then you can see the following page:
The path `/uuid your seetting` to get the clash config and vless:// link.

## Special Thanks

1.Github users who contributes to this program, no matter whether their branches are merged by the owner. They're --- @rayhanbone. @kardus911 and others.(see them at https://github.com/EDtunnel-rev/EDtunnel-rev/pulls and https://github.com/EDtunnel-rev/EDtunnel-rev/graphs/contributors)

2.Those who have forked, starred, and watched this is repository.(see them at https://github.com/EDtunnel-rev/EDtunnel-rev/watchers, https://github.com/EDtunnel-rev/EDtunnel-rev/stargazers, https://github.com/EDtunnel-rev/EDtunnel-rev/forks)

3.All people from linux.do. They supported me and helped me with this repository.

## Star History

<a href="https://star-history.com/#EDtunnel-rev/EDtunnel-rev&Date">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=EDtunnel-rev/EDtunnel-rev&type=Date&theme=dark" />
    <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=EDtunnel-rev/EDtunnel-rev&type=Date" />
    <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=EDtunnel-rev/EDtunnel-rev&type=Date" />
  </picture>
</a>
