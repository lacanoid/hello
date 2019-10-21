build:
	npm run build

dev:
	npm run dev

start: build
	npm run start

clean:
	rm -rf build
	rm -rf dist
	rm -rf cache

