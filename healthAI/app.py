from http.server import SimpleHTTPRequestHandler
import socketserver
import cohere
class MyHandler(SimpleHTTPRequestHandler):
    def do_GET(self):
        if self.path == '/api/data':
            self.send_response(200)
            self.send_header('Content-type', 'application/json')
            self.end_headers()
            self.wfile.write('{"message": "Hello from Python API!"}'.encode())
        else:
            super().do_GET()

if __name__ == '__main__':
    PORT = 63442
    httpd = socketserver.TCPServer(('', PORT), MyHandler)
    print(f'Serving at http://localhost:{PORT}')
    httpd.serve_forever()
