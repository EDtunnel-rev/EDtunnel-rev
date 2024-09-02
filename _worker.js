// @ts-ignore
import { connect } from 'cloudflare:sockets';

// How to generate your own UUID:
// [Windows] Press "Win + R", input cmd and run:  Powershell -NoExit -Command "[guid]::NewGuid()"
let userID = 'd342d11e-d424-4583-b36e-524ab1f0afa4';

const พร็อกซีไอพีs = ['192.9.177.204'];

// if you want to use ipv6 or single พร็อกซีไอพี, please add comment at this line and remove comment at the next line
let พร็อกซีไอพี = พร็อกซีไอพีs[Math.floor(Math.random() * พร็อกซีไอพีs.length)];
// use single พร็อกซีไอพี instead of random
// let พร็อกซีไอพี = 'cdn.xn--b6gac.eu.org';
// ipv6 พร็อกซีไอพี example remove comment to use
// let พร็อกซีไอพี = "[2a01:4f8:c2c:123f:64:5:6810:c55a]"

let dohURL = 'https://sky.rethinkdns.com/1:-Pf_____9_8A_AMAIgE8kMABVDDmKOHTAKg='; // https://cloudflare-dns.com/dns-query or https://dns.google/dns-query

if (!isValidUUID(userID)) {
	throw new Error('uuid is invalid');
}

function homePageHTML() {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EDtunnel-rev - VLESS Proxy</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            display: flex;
            min-height: 100vh;
            margin: 0;
            background-color: #f4f4f4;
            color: #444;
        }
        .sidebar {
            width: 250px;
            background-color: #2c3e50;
            color: #ecf0f1;
            padding: 20px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
        .sidebar h2 {
            font-size: 22px;
            margin-bottom: 20px;
            border-bottom: 1px solid #34495e;
            padding-bottom: 10px;
        }
        .sidebar a {
            color: #ecf0f1;
            text-decoration: none;
            margin-bottom: 15px;
            font-size: 18px;
            display: flex;
            align-items: center;
            transition: color 0.3s;
        }
        .sidebar a:hover {
            color: #1abc9c;
        }
        .sidebar a i {
            margin-right: 10px;
        }
        .main-content {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 40px 20px;
            background: linear-gradient(to right, #ecf0f1, #bdc3c7);
            box-shadow: inset 0 0 100px rgba(0, 0, 0, 0.1);
        }
        h1 {
            font-size: 36px;
            color: #2c3e50;
            margin-bottom: 30px;
        }
        .content {
            max-width: 800px;
            margin: 20px auto;
            padding: 20px;
            background-color: #ffffff;
            border-radius: 10px;
            box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
        }
        .content h2 {
            font-size: 28px;
            margin-bottom: 20px;
            color: #2980b9;
        }
        .content p {
            font-size: 18px;
            line-height: 1.6;
            margin-bottom: 20px;
        }
        input[type="text"] {
            padding: 12px;
            font-size: 16px;
            width: 100%;
            max-width: 400px;
            margin-bottom: 20px;
            border: 1px solid #bdc3c7;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }
        button {
            padding: 12px 25px;
            font-size: 18px;
            color: #fff;
            background-color: #1abc9c;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s, transform 0.2s;
        }
        button:hover {
            background-color: #16a085;
            transform: translateY(-2px);
        }
        .special-thanks {
            margin-top: 50px;
        }
        .special-thanks p {
            margin-bottom: 10px;
        }
        .special-thanks a {
            color: #3498db;
            text-decoration: none;
            font-weight: bold;
            transition: color 0.3s;
        }
        .special-thanks a:hover {
            color: #2980b9;
        }
        @media (max-width: 768px) {
            .sidebar {
                width: 100%;
                position: static;
                padding: 10px 20px;
                display: flex;
                justify-content: center;
            }
            .sidebar h2 {
                margin-bottom: 10px;
                font-size: 20px;
            }
            .sidebar a {
                margin-bottom: 10px;
                font-size: 16px;
            }
            .main-content {
                padding: 20px;
            }
            h1 {
                font-size: 28px;
            }
            .content {
                padding: 15px;
            }
            .content h2 {
                font-size: 24px;
            }
            input[type="text"] {
                font-size: 14px;
                padding: 10px;
            }
            button {
                padding: 10px 20px;
                font-size: 16px;
            }
        }
    </style>
</head>
<body>

    <!-- Sidebar -->
    <div class="sidebar">
        <div>
            <h2>Navigation</h2>
            <a href="https://edt.us.kg" target="_blank"><i class="fas fa-info-circle"></i> Project Overview</a>
            <a href="https://t.me/edtunrev" target="_blank"><i class="fab fa-telegram"></i> Telegram Group</a>
        </div>
        <div>
            <a href="https://github.com/EDtunnel-rev/EDtunnel-rev" target="_blank"><i class="fab fa-github"></i> GitHub Repository</a>
        </div>
    </div>

    <!-- Main Content -->
    <div class="main-content">
        <h1>EDtunnel-rev - The Best VLESS Proxy Based on Cloudflare Pages</h1>
        <div class="content">
            <h2>Welcome to EDtunnel-rev!</h2>
            <p>This tool provides a robust and efficient way to use the VLESS proxy protocol using Cloudflare Pages. Enter your UUID below to generate a custom VLESS configuration page.</p>
            <input type="text" id="uuidInput" placeholder="Enter your UUID here">
            <button onclick="redirectToUUID()">Generate Configuration</button>

            <script>
                function redirectToUUID() {
                    const uuid = document.getElementById('uuidInput').value.trim();
                    if (uuid) {
                        window.location.href = '/' + encodeURIComponent(uuid);
                    } else {
                        alert('Please enter a valid UUID!');
                    }
                }
            </script>

            <div class="special-thanks">
                <h2>Special Thanks</h2>
                <p>1. Contributors to this project, whether their branches were merged or not. Thank you, @rayhanbone, @kardus911, and others! (See them at <a href="https://github.com/EDtunnel-rev/EDtunnel-rev/pulls" target="_blank">pull requests</a> and <a href="https://github.com/EDtunnel-rev/EDtunnel-rev/graphs/contributors" target="_blank">contributors</a>)</p>
                <p>2. Everyone who has forked, starred, or watched this repository. (Check out the <a href="https://github.com/EDtunnel-rev/EDtunnel-rev/watchers" target="_blank">watchers</a>, <a href="https://github.com/EDtunnel-rev/EDtunnel-rev/stargazers" target="_blank">stargazers</a>, and <a href="https://github.com/EDtunnel-rev/EDtunnel-rev/forks" target="_blank">forks</a>)</p>
                <p>3. Special recognition to the community from linux.do for their support and contributions to this repository.</p>
            </div>
        </div>
    </div>

</body>
</html>

    `;
}



export default {
    /**
     * @param {import("@cloudflare/workers-types").Request} request
     * @param {{UUID: string, พร็อกซีไอพี: string, DNS_RESOLVER_URL: string, NODE_ID: int, API_HOST: string, API_TOKEN: string}} env
     * @param {import("@cloudflare/workers-types").ExecutionContext} ctx
     * @returns {Promise<Response>}
     */
    async fetch(request, env, ctx) {
        try {
            userID = env.UUID || userID;
            พร็อกซีไอพี = env.PROXYIP || พร็อกซีไอพี;
            dohURL = env.DNS_RESOLVER_URL || dohURL;
            let userID_Path = userID;
            if (userID.includes(',')) {
                userID_Path = userID.split(',')[0];
            }
            const upgradeHeader = request.headers.get('Upgrade');
            
            // 检查请求路径
            const url = new URL(request.url);
            
            // 检查是否为根路径的直接访问
            if (url.pathname === '/') {
                return new Response(homePageHTML(), {
                    status: 200,
                    headers: {
                        "Content-Type": "text/html; charset=utf-8",
                    },
                });
            }
            
            // 检查是否为 WebSocket 升级请求
            if (!upgradeHeader || upgradeHeader !== 'websocket') {
                switch (url.pathname) {
                    case `/cf`: {
                        // 返回请求的 Cloudflare 对象信息
                        return new Response(JSON.stringify(request.cf, null, 4), {
                            status: 200,
                            headers: {
                                "Content-Type": "application/json;charset=utf-8",
                            },
                        });
                    }
                    case `/${userID_Path}`: {
                        // 返回生成的 vless 配置信息
                        const วเลสConfig = getวเลสConfig(userID, request.headers.get('Host'));
                        return new Response(`${วเลสConfig}`, {
                            status: 200,
                            headers: {
                                "Content-Type": "text/html; charset=utf-8",
                            }
                        });
                    }
                    case `/sub/${userID_Path}`: {
                        // 返回 vless 订阅信息
                        const วเลสSubConfig = สร้างวเลสSub(userID, request.headers.get('Host'));
                        return new Response(btoa(วเลสSubConfig), {
                            status: 200,
                            headers: {
                                "Content-Type": "text/plain;charset=utf-8",
                            }
                        });
                    }
                    case `/bestip/${userID_Path}`: {
                        // 请求最佳 IP 地址配置并返回
                        const headers = request.headers;
                        const url = `https://sub.xf.free.hr/auto?host=${request.headers.get('Host')}&uuid=${userID}&path=/`;
                        const bestSubConfig = await fetch(url, { headers: headers });
                        return bestSubConfig;
                    }
                    default:
                        // 对于其他路径，进行反向代理请求到随机网站
                        const randomHostname = cn_hostnames[Math.floor(Math.random() * cn_hostnames.length)];
                        const newHeaders = new Headers(request.headers);
                        newHeaders.set('cf-connecting-ip', '1.2.3.4');
                        newHeaders.set('x-forwarded-for', '1.2.3.4');
                        newHeaders.set('x-real-ip', '1.2.3.4');
                        newHeaders.set('referer', 'https://www.google.com/search?q=edtunnel');
                        
                        // 构造代理请求
                        const proxyUrl = 'https://' + randomHostname + url.pathname + url.search;
                        let modifiedRequest = new Request(proxyUrl, {
                            method: request.method,
                            headers: newHeaders,
                            body: request.body,
                            redirect: 'manual',
                        });
                        
                        // 发送代理请求并处理重定向
                        const proxyResponse = await fetch(modifiedRequest, { redirect: 'manual' });
                        if ([301, 302].includes(proxyResponse.status)) {
                            return new Response(`Redirects to ${randomHostname} are not allowed.`, {
                                status: 403,
                                statusText: 'Forbidden',
                            });
                        }
                        
                        // 返回代理服务器的响应
                        return proxyResponse;
                }
            } else {
                // 处理 WebSocket 请求
                return await วเลสOverWSHandler(request);
            }
        } catch (err) {
            /** @type {Error} */ let e = err;
            return new Response(e.toString());
        }
    },
};

export async function uuid_validator(request) {
	const hostname = request.headers.get('Host');
	const currentDate = new Date();

	const subdomain = hostname.split('.')[0];
	const year = currentDate.getFullYear();
	const month = String(currentDate.getMonth() + 1).padStart(2, '0');
	const day = String(currentDate.getDate()).padStart(2, '0');

	const formattedDate = `${year}-${month}-${day}`;

	// const daliy_sub = formattedDate + subdomain
	const hashHex = await hashHex_f(subdomain);
	// subdomain string contains timestamps utc and uuid string TODO.
	console.log(hashHex, subdomain, formattedDate);
}

export async function hashHex_f(string) {
	const encoder = new TextEncoder();
	const data = encoder.encode(string);
	const hashBuffer = await crypto.subtle.digest('SHA-256', data);
	const hashArray = Array.from(new Uint8Array(hashBuffer));
	const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
	return hashHex;
}

/**
 * Handles วเลส over WebSocket requests by creating a WebSocket pair, accepting the WebSocket connection, and processing the วเลส header.
 * @param {import("@cloudflare/workers-types").Request} request The incoming request object.
 * @returns {Promise<Response>} A Promise that resolves to a WebSocket response object.
 */
async function วเลสOverWSHandler(request) {
	const webSocketPair = new WebSocketPair();
	const [client, webSocket] = Object.values(webSocketPair);
	webSocket.accept();

	let address = '';
	let portWithRandomLog = '';
	let currentDate = new Date();
	const log = (/** @type {string} */ info, /** @type {string | undefined} */ event) => {
		console.log(`[${currentDate} ${address}:${portWithRandomLog}] ${info}`, event || '');
	};
	const earlyDataHeader = request.headers.get('sec-websocket-protocol') || '';

	const readableWebSocketStream = makeReadableWebSocketStream(webSocket, earlyDataHeader, log);

	/** @type {{ value: import("@cloudflare/workers-types").Socket | null}}*/
	let remoteSocketWapper = {
		value: null,
	};
	let udpStreamWrite = null;
	let isDns = false;

	// ws --> remote
	readableWebSocketStream.pipeTo(new WritableStream({
		async write(chunk, controller) {
			if (isDns && udpStreamWrite) {
				return udpStreamWrite(chunk);
			}
			if (remoteSocketWapper.value) {
				const writer = remoteSocketWapper.value.writable.getWriter()
				await writer.write(chunk);
				writer.releaseLock();
				return;
			}

			const {
				hasError,
				message,
				portRemote = 443,
				addressRemote = '',
				rawDataIndex,
				วเลสVersion = new Uint8Array([0, 0]),
				isUDP,
			} = processวเลสHeader(chunk, userID);
			address = addressRemote;
			portWithRandomLog = `${portRemote} ${isUDP ? 'udp' : 'tcp'} `;
			if (hasError) {
				// controller.error(message);
				throw new Error(message); // cf seems has bug, controller.error will not end stream
			}

			// If UDP and not DNS port, close it
			if (isUDP && portRemote !== 53) {
				throw new Error('UDP proxy only enabled for DNS which is port 53');
				// cf seems has bug, controller.error will not end stream
			}

			if (isUDP && portRemote === 53) {
				isDns = true;
			}

			// ["version", "附加信息长度 N"]
			const วเลสResponseHeader = new Uint8Array([วเลสVersion[0], 0]);
			const rawClientData = chunk.slice(rawDataIndex);

			// TODO: support udp here when cf runtime has udp support
			if (isDns) {
				const { write } = await handleUDPOutBound(webSocket, วเลสResponseHeader, log);
				udpStreamWrite = write;
				udpStreamWrite(rawClientData);
				return;
			}
			handleTCPOutBound(remoteSocketWapper, addressRemote, portRemote, rawClientData, webSocket, วเลสResponseHeader, log);
		},
		close() {
			log(`readableWebSocketStream is close`);
		},
		abort(reason) {
			log(`readableWebSocketStream is abort`, JSON.stringify(reason));
		},
	})).catch((err) => {
		log('readableWebSocketStream pipeTo error', err);
	});

	return new Response(null, {
		status: 101,
		webSocket: client,
	});
}

/**
 * Handles outbound TCP connections.
 *
 * @param {any} remoteSocket 
 * @param {string} addressRemote The remote address to connect to.
 * @param {number} portRemote The remote port to connect to.
 * @param {Uint8Array} rawClientData The raw client data to write.
 * @param {import("@cloudflare/workers-types").WebSocket} webSocket The WebSocket to pass the remote socket to.
 * @param {Uint8Array} วเลสResponseHeader The วเลส response header.
 * @param {function} log The logging function.
 * @returns {Promise<void>} The remote socket.
 */
async function handleTCPOutBound(remoteSocket, addressRemote, portRemote, rawClientData, webSocket, วเลสResponseHeader, log,) {

	/**
	 * Connects to a given address and port and writes data to the socket.
	 * @param {string} address The address to connect to.
	 * @param {number} port The port to connect to.
	 * @returns {Promise<import("@cloudflare/workers-types").Socket>} A Promise that resolves to the connected socket.
	 */
	async function connectAndWrite(address, port) {
		/** @type {import("@cloudflare/workers-types").Socket} */
		const tcpSocket = connect({
			hostname: address,
			port: port,
		});
		remoteSocket.value = tcpSocket;
		log(`connected to ${address}:${port}`);
		const writer = tcpSocket.writable.getWriter();
		await writer.write(rawClientData); // first write, nomal is tls client hello
		writer.releaseLock();
		return tcpSocket;
	}

	/**
	 * Retries connecting to the remote address and port if the Cloudflare socket has no incoming data.
	 * @returns {Promise<void>} A Promise that resolves when the retry is complete.
	 */
	async function retry() {
		const tcpSocket = await connectAndWrite(พร็อกซีไอพี || addressRemote, portRemote)
		tcpSocket.closed.catch(error => {
			console.log('retry tcpSocket closed error', error);
		}).finally(() => {
			safeCloseWebSocket(webSocket);
		})
		remoteSocketToWS(tcpSocket, webSocket, วเลสResponseHeader, null, log);
	}

	const tcpSocket = await connectAndWrite(addressRemote, portRemote);

	// when remoteSocket is ready, pass to websocket
	// remote--> ws
	remoteSocketToWS(tcpSocket, webSocket, วเลสResponseHeader, retry, log);
}

/**
 * Creates a readable stream from a WebSocket server, allowing for data to be read from the WebSocket.
 * @param {import("@cloudflare/workers-types").WebSocket} webSocketServer The WebSocket server to create the readable stream from.
 * @param {string} earlyDataHeader The header containing early data for WebSocket 0-RTT.
 * @param {(info: string)=> void} log The logging function.
 * @returns {ReadableStream} A readable stream that can be used to read data from the WebSocket.
 */
function makeReadableWebSocketStream(webSocketServer, earlyDataHeader, log) {
	let readableStreamCancel = false;
	const stream = new ReadableStream({
		start(controller) {
			webSocketServer.addEventListener('message', (event) => {
				const message = event.data;
				controller.enqueue(message);
			});

			webSocketServer.addEventListener('close', () => {
				safeCloseWebSocket(webSocketServer);
				controller.close();
			});

			webSocketServer.addEventListener('error', (err) => {
				log('webSocketServer has error');
				controller.error(err);
			});
			const { earlyData, error } = base64ToArrayBuffer(earlyDataHeader);
			if (error) {
				controller.error(error);
			} else if (earlyData) {
				controller.enqueue(earlyData);
			}
		},

		pull(controller) {
			// if ws can stop read if stream is full, we can implement backpressure
			// https://streams.spec.whatwg.org/#example-rs-push-backpressure
		},

		cancel(reason) {
			log(`ReadableStream was canceled, due to ${reason}`)
			readableStreamCancel = true;
			safeCloseWebSocket(webSocketServer);
		}
	});

	return stream;
}

// https://xtls.github.io/development/protocols/วเลส.html
// https://github.com/zizifn/excalidraw-backup/blob/main/v2ray-protocol.excalidraw

/**
 * Processes the วเลส header buffer and returns an object with the relevant information.
 * @param {ArrayBuffer} วเลสBuffer The วเลส header buffer to process.
 * @param {string} userID The user ID to validate against the UUID in the วเลส header.
 * @returns {{
 *  hasError: boolean,
 *  message?: string,
 *  addressRemote?: string,
 *  addressType?: number,
 *  portRemote?: number,
 *  rawDataIndex?: number,
 *  วเลสVersion?: Uint8Array,
 *  isUDP?: boolean
 * }} An object with the relevant information extracted from the วเลส header buffer.
 */
function processวเลสHeader(วเลสBuffer, userID) {
	if (วเลสBuffer.byteLength < 24) {
		return {
			hasError: true,
			message: 'invalid data',
		};
	}

	const version = new Uint8Array(วเลสBuffer.slice(0, 1));
	let isValidUser = false;
	let isUDP = false;
	const slicedBuffer = new Uint8Array(วเลสBuffer.slice(1, 17));
	const slicedBufferString = stringify(slicedBuffer);
	// check if userID is valid uuid or uuids split by , and contains userID in it otherwise return error message to console
	const uuids = userID.includes(',') ? userID.split(",") : [userID];
	// uuid_validator(hostName, slicedBufferString);


	// isValidUser = uuids.some(userUuid => slicedBufferString === userUuid.trim());
	isValidUser = uuids.some(userUuid => slicedBufferString === userUuid.trim()) || uuids.length === 1 && slicedBufferString === uuids[0].trim();

	console.log(`userID: ${slicedBufferString}`);

	if (!isValidUser) {
		return {
			hasError: true,
			message: 'invalid user',
		};
	}

	const optLength = new Uint8Array(วเลสBuffer.slice(17, 18))[0];
	//skip opt for now

	const command = new Uint8Array(
		วเลสBuffer.slice(18 + optLength, 18 + optLength + 1)
	)[0];

	// 0x01 TCP
	// 0x02 UDP
	// 0x03 MUX
	if (command === 1) {
		isUDP = false;
	} else if (command === 2) {
		isUDP = true;
	} else {
		return {
			hasError: true,
			message: `command ${command} is not support, command 01-tcp,02-udp,03-mux`,
		};
	}
	const portIndex = 18 + optLength + 1;
	const portBuffer = วเลสBuffer.slice(portIndex, portIndex + 2);
	// port is big-Endian in raw data etc 80 == 0x005d
	const portRemote = new DataView(portBuffer).getUint16(0);

	let addressIndex = portIndex + 2;
	const addressBuffer = new Uint8Array(
		วเลสBuffer.slice(addressIndex, addressIndex + 1)
	);

	// 1--> ipv4  addressLength =4
	// 2--> domain name addressLength=addressBuffer[1]
	// 3--> ipv6  addressLength =16
	const addressType = addressBuffer[0];
	let addressLength = 0;
	let addressValueIndex = addressIndex + 1;
	let addressValue = '';
	switch (addressType) {
		case 1:
			addressLength = 4;
			addressValue = new Uint8Array(
				วเลสBuffer.slice(addressValueIndex, addressValueIndex + addressLength)
			).join('.');
			break;
		case 2:
			addressLength = new Uint8Array(
				วเลสBuffer.slice(addressValueIndex, addressValueIndex + 1)
			)[0];
			addressValueIndex += 1;
			addressValue = new TextDecoder().decode(
				วเลสBuffer.slice(addressValueIndex, addressValueIndex + addressLength)
			);
			break;
		case 3:
			addressLength = 16;
			const dataView = new DataView(
				วเลสBuffer.slice(addressValueIndex, addressValueIndex + addressLength)
			);
			// 2001:0db8:85a3:0000:0000:8a2e:0370:7334
			const ipv6 = [];
			for (let i = 0; i < 8; i++) {
				ipv6.push(dataView.getUint16(i * 2).toString(16));
			}
			addressValue = ipv6.join(':');
			// seems no need add [] for ipv6
			break;
		default:
			return {
				hasError: true,
				message: `invild  addressType is ${addressType}`,
			};
	}
	if (!addressValue) {
		return {
			hasError: true,
			message: `addressValue is empty, addressType is ${addressType}`,
		};
	}

	return {
		hasError: false,
		addressRemote: addressValue,
		addressType,
		portRemote,
		rawDataIndex: addressValueIndex + addressLength,
		วเลสVersion: version,
		isUDP,
	};
}


/**
 * Converts a remote socket to a WebSocket connection.
 * @param {import("@cloudflare/workers-types").Socket} remoteSocket The remote socket to convert.
 * @param {import("@cloudflare/workers-types").WebSocket} webSocket The WebSocket to connect to.
 * @param {ArrayBuffer | null} วเลสResponseHeader The วเลส response header.
 * @param {(() => Promise<void>) | null} retry The function to retry the connection if it fails.
 * @param {(info: string) => void} log The logging function.
 * @returns {Promise<void>} A Promise that resolves when the conversion is complete.
 */
async function remoteSocketToWS(remoteSocket, webSocket, วเลสResponseHeader, retry, log) {
	// remote--> ws
	let remoteChunkCount = 0;
	let chunks = [];
	/** @type {ArrayBuffer | null} */
	let วเลสHeader = วเลสResponseHeader;
	let hasIncomingData = false; // check if remoteSocket has incoming data
	await remoteSocket.readable
		.pipeTo(
			new WritableStream({
				start() {
				},
				/**
				 * 
				 * @param {Uint8Array} chunk 
				 * @param {*} controller 
				 */
				async write(chunk, controller) {
					hasIncomingData = true;
					remoteChunkCount++;
					if (webSocket.readyState !== WS_READY_STATE_OPEN) {
						controller.error(
							'webSocket.readyState is not open, maybe close'
						);
					}
					if (วเลสHeader) {
						webSocket.send(await new Blob([วเลสHeader, chunk]).arrayBuffer());
						วเลสHeader = null;
					} else {
						// console.log(`remoteSocketToWS send chunk ${chunk.byteLength}`);
						// seems no need rate limit this, CF seems fix this??..
						// if (remoteChunkCount > 20000) {
						// 	// cf one package is 4096 byte(4kb),  4096 * 20000 = 80M
						// 	await delay(1);
						// }
						webSocket.send(chunk);
					}
				},
				close() {
					log(`remoteConnection!.readable is close with hasIncomingData is ${hasIncomingData}`);
					// safeCloseWebSocket(webSocket); // no need server close websocket frist for some case will casue HTTP ERR_CONTENT_LENGTH_MISMATCH issue, client will send close event anyway.
				},
				abort(reason) {
					console.error(`remoteConnection!.readable abort`, reason);
				},
			})
		)
		.catch((error) => {
			console.error(
				`remoteSocketToWS has exception `,
				error.stack || error
			);
			safeCloseWebSocket(webSocket);
		});

	// seems is cf connect socket have error,
	// 1. Socket.closed will have error
	// 2. Socket.readable will be close without any data coming
	if (hasIncomingData === false && retry) {
		log(`retry`)
		retry();
	}
}

/**
 * Decodes a base64 string into an ArrayBuffer.
 * @param {string} base64Str The base64 string to decode.
 * @returns {{earlyData: ArrayBuffer|null, error: Error|null}} An object containing the decoded ArrayBuffer or null if there was an error, and any error that occurred during decoding or null if there was no error.
 */
function base64ToArrayBuffer(base64Str) {
	if (!base64Str) {
		return { earlyData: null, error: null };
	}
	try {
		// go use modified Base64 for URL rfc4648 which js atob not support
		base64Str = base64Str.replace(/-/g, '+').replace(/_/g, '/');
		const decode = atob(base64Str);
		const arryBuffer = Uint8Array.from(decode, (c) => c.charCodeAt(0));
		return { earlyData: arryBuffer.buffer, error: null };
	} catch (error) {
		return { earlyData: null, error };
	}
}

/**
 * Checks if a given string is a valid UUID.
 * Note: This is not a real UUID validation.
 * @param {string} uuid The string to validate as a UUID.
 * @returns {boolean} True if the string is a valid UUID, false otherwise.
 */
function isValidUUID(uuid) {
	const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
	return uuidRegex.test(uuid);
}

const WS_READY_STATE_OPEN = 1;
const WS_READY_STATE_CLOSING = 2;
/**
 * Closes a WebSocket connection safely without throwing exceptions.
 * @param {import("@cloudflare/workers-types").WebSocket} socket The WebSocket connection to close.
 */
function safeCloseWebSocket(socket) {
	try {
		if (socket.readyState === WS_READY_STATE_OPEN || socket.readyState === WS_READY_STATE_CLOSING) {
			socket.close();
		}
	} catch (error) {
		console.error('safeCloseWebSocket error', error);
	}
}

const byteToHex = [];

for (let i = 0; i < 256; ++i) {
	byteToHex.push((i + 256).toString(16).slice(1));
}

function unsafeStringify(arr, offset = 0) {
	return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}

function stringify(arr, offset = 0) {
	const uuid = unsafeStringify(arr, offset);
	if (!isValidUUID(uuid)) {
		throw TypeError("Stringified UUID is invalid");
	}
	return uuid;
}


/**
 * Handles outbound UDP traffic by transforming the data into DNS queries and sending them over a WebSocket connection.
 * @param {import("@cloudflare/workers-types").WebSocket} webSocket The WebSocket connection to send the DNS queries over.
 * @param {ArrayBuffer} วเลสResponseHeader The วเลส response header.
 * @param {(string) => void} log The logging function.
 * @returns {{write: (chunk: Uint8Array) => void}} An object with a write method that accepts a Uint8Array chunk to write to the transform stream.
 */
async function handleUDPOutBound(webSocket, วเลสResponseHeader, log) {

	let isวเลสHeaderSent = false;
	const transformStream = new TransformStream({
		start(controller) {

		},
		transform(chunk, controller) {
			// udp message 2 byte is the the length of udp data
			// TODO: this should have bug, beacsue maybe udp chunk can be in two websocket message
			for (let index = 0; index < chunk.byteLength;) {
				const lengthBuffer = chunk.slice(index, index + 2);
				const udpPakcetLength = new DataView(lengthBuffer).getUint16(0);
				const udpData = new Uint8Array(
					chunk.slice(index + 2, index + 2 + udpPakcetLength)
				);
				index = index + 2 + udpPakcetLength;
				controller.enqueue(udpData);
			}
		},
		flush(controller) {
		}
	});

	// only handle dns udp for now
	transformStream.readable.pipeTo(new WritableStream({
		async write(chunk) {
			const resp = await fetch(dohURL, // dns server url
				{
					method: 'POST',
					headers: {
						'content-type': 'application/dns-message',
					},
					body: chunk,
				})
			const dnsQueryResult = await resp.arrayBuffer();
			const udpSize = dnsQueryResult.byteLength;
			// console.log([...new Uint8Array(dnsQueryResult)].map((x) => x.toString(16)));
			const udpSizeBuffer = new Uint8Array([(udpSize >> 8) & 0xff, udpSize & 0xff]);
			if (webSocket.readyState === WS_READY_STATE_OPEN) {
				log(`doh success and dns message length is ${udpSize}`);
				if (isวเลสHeaderSent) {
					webSocket.send(await new Blob([udpSizeBuffer, dnsQueryResult]).arrayBuffer());
				} else {
					webSocket.send(await new Blob([วเลสResponseHeader, udpSizeBuffer, dnsQueryResult]).arrayBuffer());
					isวเลสHeaderSent = true;
				}
			}
		}
	})).catch((error) => {
		log('dns udp has error' + error)
	});

	const writer = transformStream.writable.getWriter();

	return {
		/**
		 * 
		 * @param {Uint8Array} chunk 
		 */
		write(chunk) {
			writer.write(chunk);
		}
	};
}

const at = 'QA==';
const pt = 'dmxlc3M=';
const ed = 'RUR0dW5uZWw=';
/**
 *
 * @param {string} userID - single or comma separated userIDs
 * @param {string | null} hostName
 * @returns {string}
 */
function getวเลสConfig(userIDs, hostName) {
	const commonUrlPart = `:443?encryption=none&security=tls&sni=${hostName}&fp=randomized&type=ws&host=${hostName}&path=%22F%3Fed%3D2048#${hostName}`;
	const hashSeparator = "################################################################";

	// Split the userIDs into an array
	const userIDArray = userIDs.split(",");

	// Prepare output string for each userID
	const output = userIDArray.map((userID) => {
		const วเลสMain = atob(pt) + '://' + userID + atob(at) + hostName + commonUrlPart;
		const วเลสSec = atob(pt) + '://' + userID + atob(at) + พร็อกซีไอพี + commonUrlPart;
		return `<h2>UUID: ${userID}</h2>${hashSeparator}\nv2ray default ip
---------------------------------------------------------------
${วเลสMain}
<button onclick='copyToClipboard("${วเลสMain}")'><i class="fa fa-clipboard"></i> Copy วเลสMain</button>
---------------------------------------------------------------
v2ray with bestip
---------------------------------------------------------------
${วเลสSec}
<button onclick='copyToClipboard("${วเลสSec}")'><i class="fa fa-clipboard"></i> Copy วเลสSec</button>
---------------------------------------------------------------`;
	}).join('\n');
	const sublink = `https://${hostName}/sub/${userIDArray[0]}?format=clash`
	const subbestip = `https://${hostName}/bestip/${userIDArray[0]}`;
	const clash_link = `https://api.v1.mk/sub?target=clash&url=${encodeURIComponent(sublink)}&insert=false&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&new_name=true`;
	// Prepare header string
	const header = `
<b style='font-size: 15px;'>Welcome! This function generates configuration for vless protocol. If you found this useful, please check our GitHub project for more:</b>
<b style='font-size: 15px;'>欢迎！这是生成vless协议的配置。如果您发现这个项目很好用，请查看我们的 GitHub 项目给我一个star：</b>
<a href='https://github.com/EDtunnel-rev/EDtunnel-rev' target='_blank'>EDtunnel-rev - https://github.com/EDtunnel-rev/EDtunnel-rev</a>
<iframe src='https://ghbtns.com/github-btn.html?user=EDtunnel-rev&repo=EDtunnel-rev&type=star&count=true&size=large' frameborder='0' scrolling='0' width='170' height='30' title='GitHub'></iframe>
<a href='//${hostName}/sub/${userIDArray[0]}' target='_blank'>vless节点订阅连接</a>
<a href='clash://install-config?url=${encodeURIComponent(`https://${hostName}/sub/${userIDArray[0]}?format=clash`)}}' target='_blank'>Clash for Windows 节点订阅连接</a>
<a href='${clash_link}' target='_blank'>Clash 节点订阅连接</a>
<a href='${subbestip}' target='_blank'>优选IP自动节点订阅</a>
<a href='clash://install-config?url=${encodeURIComponent(subbestip)}' target='_blank'>Clash优选IP自动</a>
<a href='sing-box://import-remote-profile?url=${encodeURIComponent(subbestip)}' target='_blank'>singbox优选IP自动</a>
<a href='sn://subscription?url=${encodeURIComponent(subbestip)}' target='_blank'>nekobox优选IP自动</a>
<a href='v2rayng://install-config?url=${encodeURIComponent(subbestip)}' target='_blank'>v2rayNG优选IP自动</a></p>`;

	// HTML Head with CSS and FontAwesome library
	const htmlHead = `
<head>
	<title>EDtunnel: VLESS Configuration</title>
	<meta name='description' content='This is a tool for generating VLESS protocol configurations. Give us a star on GitHub https://github.com/EDtunnel-rev/EDtunnel-rev if you found it useful!'>
	<meta name='keywords' content='EDtunnel, Cloudflare Pages, Cloudflare Worker, Severless'>
	<meta name='viewport' content='width=device-width, initial-scale=1'>
	<meta property='og:site_name' content='EDtunnel: VLESS Configuration' />
	<meta property='og:type' content='website' />
	<meta property='og:title' content='EDtunnel-rev - VLESS Configuration and Subscribe Output' />
	<meta property='og:description' content='Use Cloudflare Pages and Worker Severless to implement VLESS protocol' />
	<meta property='og:url' content='https://${hostName}/' />
	<meta property='og:image' content='https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${encodeURIComponent(`วเลส://${userIDs.split(",")[0]}@${hostName}${commonUrlPart}`)}' />
	<meta name='twitter:card' content='summary_large_image' />
	<meta name='twitter:title' content='EDtunnel - VLESS Configuration and Subscribe Output' />
	<meta name='twitter:description' content='Use Cloudflare Pages and Worker Severless to implement VLESS protocol' />
	<meta name='twitter:url' content='https://${hostName}/' />
	<meta name='twitter:image' content='https://cloudflare-ipfs.com/ipfs/bafybeigd6i5aavwpr6wvnwuyayklq3omonggta4x2q7kpmgafj357nkcky' />
	<meta property='og:image:width' content='1500' />
	<meta property='og:image:height' content='1500' />
	<style>
		body {
			font-family: 'Roboto', sans-serif;
			background-color: var(--background-color, #f0f0f0);
			color: var(--text-color, #333);
			padding: 20px;
			margin: 0;
			transition: all 0.3s ease;
		}
		a {
			color: var(--link-color, #1a0dab);
			text-decoration: none;
			transition: color 0.3s;
		}
		a:hover {
			color: var(--link-hover-color, #1a0dab);
		}
		img {
			max-width: 100%;
			height: auto;
			border-radius: 8px;
			box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
		}
		pre {
			white-space: pre-wrap;
			word-wrap: break-word;
			background-color: var(--pre-background-color, #fff);
			border: 1px solid var(--pre-border-color, #ddd);
			padding: 20px;
			margin: 20px 0;
			border-radius: 10px;
			box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
			color: var(--pre-text-color, #333);
			font-size: 1rem;
		}
		h1, h2, h3, h4, h5, h6 {
			color: var(--header-color, #1a0dab);
			text-shadow: var(--header-shadow, none);
			font-family: 'Orbitron', sans-serif;
		}
		button {
			background-color: var(--button-background-color, #1a0dab);
			color: var(--button-text-color, white);
			border: none;
			padding: 10px 20px;
			font-size: 1rem;
			cursor: pointer;
			transition: background-color 0.3s, transform 0.3s;
			border-radius: 5px;
		}
		button:hover {
			background-color: var(--button-hover-background-color, #1a0dab);
			transform: translateY(-2px);
		}
		.container {
			max-width: 1200px;
			margin: 0 auto;
			padding: 20px;
			background: rgba(255, 255, 255, 0.05);
			border-radius: 10px;
			box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
			backdrop-filter: blur(5px);
			-webkit-backdrop-filter: blur(5px);
			border: 1px solid rgba(255, 255, 255, 0.1);
		}
		.theme-button {
			margin: 10px;
			cursor: pointer;
		}
		.language-button {
			margin: 5px;
			cursor: pointer;
		}
		/* Dark mode */
		.dark {
			--background-color: #0a0f1c;
			--text-color: #e0e6f1;
			--link-color: #1abc9c;
			--link-hover-color: #16a085;
			--pre-background-color: #1b2735;
			--pre-border-color: #34495e;
			--pre-text-color: #c8d6e5;
			--header-color: #1abc9c;
			--header-shadow: 0 0 10px #1abc9c, 0 0 20px #1abc9c, 0 0 30px #1abc9c;
			--button-background-color: #1abc9c;
			--button-hover-background-color: #16a085;
			--button-text-color: #0a0f1c;
		}
		/* Gold mode */
		.gold {
			--background-color: #1f1f1f;
			--text-color: #d4af37;
			--link-color: #ffd700;
			--link-hover-color: #ffa500;
			--pre-background-color: #333;
			--pre-border-color: #555;
			--pre-text-color: #ffdd44;
			--header-color: #ffd700;
			--header-shadow: 0 0 10px #ffd700, 0 0 20px #ffd700, 0 0 30px #ffd700;
			--button-background-color: #ffd700;
			--button-hover-background-color: #ffdd44;
			--button-text-color: #333;
		}
		/* Purple mode */
		.purple {
			--background-color: #1a0033;
			--text-color: #d9b3ff;
			--link-color: #c71585;
			--link-hover-color: #d02090;
			--pre-background-color: #330066;
			--pre-border-color: #663399;
			--pre-text-color: #e6e6fa;
			--header-color: #ba55d3;
			--header-shadow: 0 0 10px #ba55d3, 0 0 20px #ba55d3, 0 0 30px #ba55d3;
			--button-background-color: #ba55d3;
			--button-hover-background-color: #dda0dd;
			--button-text-color: #fff;
		}
		/* Modal styles */
		.modal {
			display: none;
			position: fixed;
			z-index: 1;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
			overflow: auto;
			background-color: rgba(0, 0, 0, 0.7);
			padding-top: 60px;
		}
		.modal-content {
			background-color: #fefefe;
			margin: 5% auto;
			padding: 20px;
			border: 1px solid #888;
			width: 80%;
			max-width: 600px;
			border-radius: 10px;
			box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
		}
		.close {
			color: #aaa;
			float: right;
			font-size: 28px;
			font-weight: bold;
		}
		.close:hover,
		.close:focus {
			color: black;
			text-decoration: none;
			cursor: pointer;
		}
		.modal-button {
			display: block;
			width: 100%;
			background-color: #1abc9c;
			color: white;
			border: none;
			padding: 15px;
			font-size: 1.1rem;
			cursor: pointer;
			margin-top: 20px;
			border-radius: 5px;
			transition: background-color 0.3s;
		}
		.modal-button:hover {
			background-color: #16a085;
		}
	</style>
	<!-- Add Google Fonts -->
	<link href='https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=Roboto:wght@400;700&display=swap' rel='stylesheet'>
	<!-- Add FontAwesome library -->
	<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'>
	<script>
		// Language and Theme handling
		let currentTheme = localStorage.getItem('theme') || 'light';
		let currentLanguage = navigator.language || 'en';
		const themeButtonMapping = {
			light: "default",
			dark: "dark",
			gold: "gold",
			purple: "purple"
		};
		document.addEventListener('DOMContentLoaded', function() {
			document.body.classList.add(currentTheme);

			const languageButtons = document.querySelectorAll('.language-button');
			languageButtons.forEach(button => {
				button.addEventListener('click', function() {
					const language = this.dataset.language;
					currentLanguage = language;
					updateLanguage(language);
				});
			});

			const themeButtons = document.querySelectorAll('.theme-button');
			themeButtons.forEach(button => {
				button.addEventListener('click', function() {
					const theme = this.dataset.theme;
					changeTheme(theme);
				});
			});

			const modal = document.getElementById('myModal');
			const closeBtn = document.getElementsByClassName('close')[0];
			const agreeButton = document.getElementById('agreeButton');
			const agreementCheckbox = document.getElementById('agreementCheckbox');

			modal.style.display = 'block';
			agreementCheckbox.addEventListener('change', function() {
				agreeButton.disabled = !this.checked;
			});
			agreeButton.addEventListener('click', function() {
				modal.style.display = 'none';
			});
			closeBtn.addEventListener('click', function() {
				modal.style.display = 'none';
			});
			window.onclick = function(event) {
				if (event.target == modal) {
					modal.style.display = 'none';
				}
			};
		});

		function changeTheme(theme) {
			document.body.className = theme;
			localStorage.setItem('theme', theme);
		}

		function updateLanguage(language) {
			// Language data
			const languages = {
				en: {
					title: "User Agreement",
					terms: "Before using this tool, please read and agree to the following terms...",
					agree: "I agree to the terms and conditions"
				},
				zh: {
					title: "用户协议",
					terms: "在使用此工具之前，请阅读并同意以下条款...",
					agree: "我同意条款和条件"
				},
				fr: {
					title: "Accord de l'utilisateur",
					terms: "Avant d'utiliser cet outil, veuillez lire et accepter les conditions suivantes...",
					agree: "J'accepte les termes et conditions"
				},
				ja: {
					title: "ユーザー同意書",
					terms: "このツールを使用する前に、次の条件を読んで同意してください...",
					agree: "利用規約に同意します"
				},
				ko: {
					title: "사용자 동의서",
					terms: "이 도구를 사용하기 전에 다음 이용 약관을 읽고 동의하십시오...",
					agree: "이용 약관에 동의합니다"
				}
			};
			const selectedLanguage = languages[language] || languages.en;
			document.querySelector('.modal-content h2').textContent = selectedLanguage.title;
			document.querySelector('.modal-content p').textContent = selectedLanguage.terms;
			document.querySelector('#agreeButton').textContent = selectedLanguage.agree;
		}
	</script>
</head>

  `;

	// Join output with newlines, wrap inside <html> and <body>
	return `
  <html>
  ${htmlHead}
  <body>
<body>
	<!-- Modal -->
	<div id="myModal" class="modal">
		<div class="modal-content">
			<span class="close">&times;</span>
			<h2>User Agreement</h2>
			<p>Before using this tool, please read and agree to the following terms...</p>
			<ol>
				<li><strong>Compliance with Laws:</strong> You agree to use this tool in full compliance with all local, national, and international laws and regulations.</li>
				<li><strong>No Misuse:</strong> You agree not to misuse this tool for any illegal, unethical, or immoral activities. This includes, but is not limited to, using it to transmit or facilitate the transmission of unwholesome, harmful, or offensive content.</li>
				<li><strong>Responsibility Disclaimer:</strong> All actions taken using this tool are your own responsibility. The creators and contributors of this project, including the GitHub account <a href="https://github.com/EDtunnel-rev" target="_blank">EDtunnel-rev</a>, are not aware of or responsible for how you choose to use this tool.</li>
				<li><strong>No Liability:</strong> The creators and contributors of this project are not liable for any consequences resulting from your use of this tool, including but not limited to legal, financial, or reputational damages.</li>
				<li><strong>Non-affiliation:</strong> This tool is provided independently and is not affiliated with or endorsed by any organization, government, or corporate entity.</li>
				<li><strong>Open Source Contributions:</strong> This project is contributed by the GitHub account <a href="https://github.com/EDtunnel-rev" target="_blank">EDtunnel-rev</a>. The actual controller of this account is Satdog, whose official website is <a href="https://satdog.us.kg" target="_blank">https://satdog.us.kg</a>. Satdog's GitHub official account is <a href="https://github.com/EXEthereum" target="_blank">EXEthereum</a>, with the official page at <a href="https://github.com/EXEthereum" target="_blank">https://github.com/EXEthereum</a>.</li>
				<li><strong>Independence of the Author:</strong> The author of this project is not aware of and is not responsible for how this tool is used. The author does not endorse or condone any particular use case for this tool.</li>
				<li><strong>Amendments:</strong> The terms of this agreement may be updated or changed at any time, and it is your responsibility to stay informed of such changes by reviewing the agreement periodically.</li>
			</ol>
			<p>Please confirm your agreement to these terms by checking the box below and clicking "Agree".</p>
			<label><input type="checkbox" id="agreementCheckbox"> I agree to the terms and conditions</label>
			<button id="agreeButton" class="modal-button" disabled>Agree</button>
		</div>
	</div>

	<div class="container">
		<h1>Welcome to EDtunnel: VLESS Configuration</h1>
		<p>Generate your VLESS protocol configuration with ease and efficiency. This tool is powered by Cloudflare Pages and Worker Severless technology to deliver seamless performance.</p>
		
		<!-- Theme and Language Switcher -->
		<div class="theme-switcher">
			<button class="theme-button" data-theme="light">Light</button>
			<button class="theme-button" data-theme="dark">Dark</button>
			<button class="theme-button" data-theme="gold">Gold</button>
			<button class="theme-button" data-theme="purple">Purple</button>
		</div>
  <pre style='background-color: transparent; border: none;'>${header}</pre>
  <pre>${output}</pre>
  </body>
  <script>
	function copyToClipboard(text) {
	  navigator.clipboard.writeText(text)
		.then(() => {
		  alert("Copied to clipboard");
		})
		.catch((err) => {
		  console.error("Failed to copy to clipboard:", err);
		});
	}
  </script>
  </html>`;
}

const เซ็ตพอร์ตHttp = new Set([80, 8080, 8880, 2052, 2086, 2095, 2082]);
const เซ็ตพอร์ตHttps = new Set([443, 8443, 2053, 2096, 2087, 2083]);

function สร้างวเลสSub(ไอดีผู้ใช้_เส้นทาง, ชื่อโฮสต์) {
	const อาร์เรย์ไอดีผู้ใช้ = ไอดีผู้ใช้_เส้นทาง.includes(',') ? ไอดีผู้ใช้_เส้นทาง.split(',') : [ไอดีผู้ใช้_เส้นทาง];
	const ส่วนUrlทั่วไปHttp = `?encryption=none&security=none&fp=random&type=ws&host=${ชื่อโฮสต์}&path=%2F%3Fed%3D2048#`;
	const ส่วนUrlทั่วไปHttps = `?encryption=none&security=tls&sni=${ชื่อโฮสต์}&fp=random&type=ws&host=${ชื่อโฮสต์}&path=%2F%3Fed%3D2048#`;

	const ผลลัพธ์ = อาร์เรย์ไอดีผู้ใช้.flatMap((ไอดีผู้ใช้) => {
		const การกำหนดค่าHttp = Array.from(เซ็ตพอร์ตHttp).flatMap((พอร์ต) => {
			if (!ชื่อโฮสต์.includes('pages.dev')) {
				const ส่วนUrl = `${ชื่อโฮสต์}-HTTP-${พอร์ต}`;
				const วเลสหลักHttp = atob(pt) + '://' + ไอดีผู้ใช้ + atob(at) + ชื่อโฮสต์ + ':' + พอร์ต + ส่วนUrlทั่วไปHttp + ส่วนUrl;
				return พร็อกซีไอพีs.flatMap((พร็อกซีไอพี) => {
					const วเลสรองHttp = atob(pt) + '://' + ไอดีผู้ใช้ + atob(at) + พร็อกซีไอพี + ':' + พอร์ต + ส่วนUrlทั่วไปHttp + ส่วนUrl + '-' + พร็อกซีไอพี + '-' + atob(ed);
					return [วเลสหลักHttp, วเลสรองHttp];
				});
			}
			return [];
		});

		const การกำหนดค่าHttps = Array.from(เซ็ตพอร์ตHttps).flatMap((พอร์ต) => {
			const ส่วนUrl = `${ชื่อโฮสต์}-HTTPS-${พอร์ต}`;
			const วเลสหลักHttps = atob(pt) + '://' + ไอดีผู้ใช้ + atob(at) + ชื่อโฮสต์ + ':' + พอร์ต + ส่วนUrlทั่วไปHttps + ส่วนUrl;
			return พร็อกซีไอพีs.flatMap((พร็อกซีไอพี) => {
				const วเลสรองHttps = atob(pt) + '://' + ไอดีผู้ใช้ + atob(at) + พร็อกซีไอพี + ':' + พอร์ต + ส่วนUrlทั่วไปHttps + ส่วนUrl + '-' + พร็อกซีไอพี + '-' + atob(ed);
				return [วเลสหลักHttps, วเลสรองHttps];
			});
		});

		return [...การกำหนดค่าHttp, ...การกำหนดค่าHttps];
	});

	return ผลลัพธ์.join('\n');
}

const cn_hostnames = [
	'weibo.com',                // Weibo - A popular social media platform
	'www.baidu.com',            // Baidu - The largest search engine in China
	'www.qq.com',               // QQ - A widely used instant messaging platform
	'www.taobao.com',           // Taobao - An e-commerce website owned by Alibaba Group
	'www.jd.com',               // JD.com - One of the largest online retailers in China
	'www.sina.com.cn',          // Sina - A Chinese online media company
	'www.sohu.com',             // Sohu - A Chinese internet service provider
	'www.tmall.com',            // Tmall - An online retail platform owned by Alibaba Group
	'www.163.com',              // NetEase Mail - One of the major email providers in China
	'www.zhihu.com',            // Zhihu - A popular question-and-answer website
	'www.youku.com',            // Youku - A Chinese video sharing platform
	'www.xinhuanet.com',        // Xinhua News Agency - Official news agency of China
	'www.douban.com',           // Douban - A Chinese social networking service
	'www.meituan.com',          // Meituan - A Chinese group buying website for local services
	'www.toutiao.com',          // Toutiao - A news and information content platform
	'www.ifeng.com',            // iFeng - A popular news website in China
	'www.autohome.com.cn',      // Autohome - A leading Chinese automobile online platform
	'www.360.cn',               // 360 - A Chinese internet security company
	'www.douyin.com',           // Douyin - A Chinese short video platform
	'www.kuaidi100.com',        // Kuaidi100 - A Chinese express delivery tracking service
	'www.wechat.com',           // WeChat - A popular messaging and social media app
	'www.csdn.net',             // CSDN - A Chinese technology community website
	'www.imgo.tv',              // ImgoTV - A Chinese live streaming platform
	'www.aliyun.com',           // Alibaba Cloud - A Chinese cloud computing company
	'www.eyny.com',             // Eyny - A Chinese multimedia resource-sharing website
	'www.mgtv.com',             // MGTV - A Chinese online video platform
	'www.xunlei.com',           // Xunlei - A Chinese download manager and torrent client
	'www.hao123.com',           // Hao123 - A Chinese web directory service
	'www.bilibili.com',         // Bilibili - A Chinese video sharing and streaming platform
	'www.youth.cn',             // Youth.cn - A China Youth Daily news portal
	'www.hupu.com',             // Hupu - A Chinese sports community and forum
	'www.youzu.com',            // Youzu Interactive - A Chinese game developer and publisher
	'www.panda.tv',             // Panda TV - A Chinese live streaming platform
	'www.tudou.com',            // Tudou - A Chinese video-sharing website
	'www.zol.com.cn',           // ZOL - A Chinese electronics and gadgets website
	'www.toutiao.io',           // Toutiao - A news and information app
	'www.tiktok.com',           // TikTok - A Chinese short-form video app
	'www.netease.com',          // NetEase - A Chinese internet technology company
	'www.cnki.net',             // CNKI - China National Knowledge Infrastructure, an information aggregator
	'www.zhibo8.cc',            // Zhibo8 - A website providing live sports streams
	'www.zhangzishi.cc',        // Zhangzishi - Personal website of Zhang Zishi, a public intellectual in China
	'www.xueqiu.com',           // Xueqiu - A Chinese online social platform for investors and traders
	'www.qqgongyi.com',         // QQ Gongyi - Tencent's charitable foundation platform
	'www.ximalaya.com',         // Ximalaya - A Chinese online audio platform
	'www.dianping.com',         // Dianping - A Chinese online platform for finding and reviewing local businesses
	'www.suning.com',           // Suning - A leading Chinese online retailer
	'www.zhaopin.com',          // Zhaopin - A Chinese job recruitment platform
	'www.jianshu.com',          // Jianshu - A Chinese online writing platform
	'www.mafengwo.cn',          // Mafengwo - A Chinese travel information sharing platform
	'www.51cto.com',            // 51CTO - A Chinese IT technical community website
	'www.qidian.com',           // Qidian - A Chinese web novel platform
	'www.ctrip.com',            // Ctrip - A Chinese travel services provider
	'www.pconline.com.cn',      // PConline - A Chinese technology news and review website
	'www.cnzz.com',             // CNZZ - A Chinese web analytics service provider
	'www.telegraph.co.uk',      // The Telegraph - A British newspaper website	
	'www.ynet.com',             // Ynet - A Chinese news portal
	'www.ted.com',              // TED - A platform for ideas worth spreading
	'www.renren.com',           // Renren - A Chinese social networking service
	'www.pptv.com',             // PPTV - A Chinese online video streaming platform
	'www.liepin.com',           // Liepin - A Chinese online recruitment website
	'www.881903.com',           // 881903 - A Hong Kong radio station website
	'www.aipai.com',            // Aipai - A Chinese online video sharing platform
	'www.ttpaihang.com',        // Ttpaihang - A Chinese celebrity popularity ranking website
	'www.quyaoya.com',          // Quyaoya - A Chinese online ticketing platform
	'www.91.com',               // 91.com - A Chinese software download website
	'www.dianyou.cn',           // Dianyou - A Chinese game information website
	'www.tmtpost.com',          // TMTPost - A Chinese technology media platform
	'www.douban.com',           // Douban - A Chinese social networking service
	'www.guancha.cn',           // Guancha - A Chinese news and commentary website
	'www.so.com',               // So.com - A Chinese search engine
	'www.58.com',               // 58.com - A Chinese classified advertising website
	'www.cnblogs.com',          // Cnblogs - A Chinese technology blog community
	'www.cntv.cn',              // CCTV - China Central Television official website
	'www.secoo.com',            // Secoo - A Chinese luxury e-commerce platform
];
