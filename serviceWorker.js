// console.log("serviceWorker")
// const db = new Dexie('FlexDB');
// db.version(1).stores({
//     Categories: '++id, category',
// });
// db.Categories.toArray().then(data => document.body.innerText = data.length)
const broadcast = new BroadcastChannel('count-channel');

self.addEventListener('install', event => {
    console.log('install')
    const openDB = (callback) => {
        let req = indexedDB.open('FlexDB', 10);
        req.onerror = (err) => {
            //could not open db
            console.warn(err);
            DB = null;
        };
        req.onupgradeneeded = (ev) => {
            let db = ev.target.result;
            if (!db.objectStoreNames.contains('Categories')) {
                db.createObjectStore('Categories', {
                    keyPath: 'id',
                });
            }
        };
        req.onsuccess = (ev) => {
            DB = ev.target.result;
            console.log('db opened and upgraded as needed', DB);
            if (callback) {
                callback();
            }
        };
    };

    openDB()

    function readAll() {
        var objectStore = DB.transaction('Categories').objectStore('Categories');
        objectStore.openCursor().onsuccess = function (event) {
            var cursor = event.target.result;
            console.log(self)
            if (cursor) {
                console.log('Id: ' + cursor.value.category);
                broadcast.postMessage(cursor.value.category)
                cursor.continue();
            } else {
                console.log('没有更多数据了！');
            }
        };
    }
    setTimeout(readAll, 1000)

});
console.log("service worker")

self.addEventListener('active', event => {
    console.log('active')
    const openDB = (callback) => {
        let req = indexedDB.open('FlexDB', 10);
        req.onerror = (err) => {
            //could not open db
            console.warn(err);
            DB = null;
        };
        req.onupgradeneeded = (ev) => {
            let db = ev.target.result;
            if (!db.objectStoreNames.contains('Categories')) {
                db.createObjectStore('Categories', {
                    keyPath: 'id',
                });
            }
        };
        req.onsuccess = (ev) => {
            DB = ev.target.result;
            console.log('db opened and upgraded as needed', DB);
            if (callback) {
                callback();
            }
        };
    };

    openDB()

    function readAll() {
        var objectStore = DB.transaction('Categories').objectStore('Categories');
        objectStore.openCursor().onsuccess = function (event) {
            var cursor = event.target.result;
            console.log(self)
            if (cursor) {
                console.log('Id: ' + cursor.value.category);
                broadcast.postMessage(cursor.value.category)
                cursor.continue();
            } else {
                console.log('没有更多数据了！');
            }
        };
    }
    setTimeout(readAll, 1000)

});

self.addEventListener('message', event => {
    console.log('message')
    const openDB = (callback) => {
        let req = indexedDB.open('FlexDB', 10);
        req.onerror = (err) => {
            //could not open db
            console.warn(err);
            DB = null;
        };
        req.onupgradeneeded = (ev) => {
            let db = ev.target.result;
            if (!db.objectStoreNames.contains('Categories')) {
                db.createObjectStore('Categories', {
                    keyPath: 'id',
                });
            }
        };
        req.onsuccess = (ev) => {
            DB = ev.target.result;
            console.log('db opened and upgraded as needed', DB);
            if (callback) {
                callback();
            }
        };
    };

    openDB()

    function readAll() {
        var objectStore = DB.transaction('Categories').objectStore('Categories');
        objectStore.openCursor().onsuccess = function (event) {
            var cursor = event.target.result;
            console.log(self)
            if (cursor) {
                console.log('Id: ' + cursor.value.category);
                broadcast.postMessage(cursor.value.category)
                cursor.continue();
            } else {
                console.log('没有更多数据了！');
            }
        };
    }
    setTimeout(readAll, 1000)
})


broadcast.onmessage = () => {
    console.log('broadcast')
    const openDB = (callback) => {
        let req = indexedDB.open('FlexDB', 10);
        req.onerror = (err) => {
            //could not open db
            console.warn(err);
            DB = null;
        };
        req.onupgradeneeded = (ev) => {
            let db = ev.target.result;
            if (!db.objectStoreNames.contains('Categories')) {
                db.createObjectStore('Categories', {
                    keyPath: 'id',
                });
            }
        };
        req.onsuccess = (ev) => {
            DB = ev.target.result;
            console.log('db opened and upgraded as needed', DB);
            if (callback) {
                callback();
            }
        };
    };

    openDB()

    function readAll() {
        var objectStore = DB.transaction('Categories').objectStore('Categories');
        objectStore.openCursor().onsuccess = function (event) {
            var cursor = event.target.result;
            console.log(self)
            if (cursor) {
                console.log('Id: ' + cursor.value.category);
                broadcast.postMessage(cursor.value.category)
                cursor.continue();
            } else {
                console.log('没有更多数据了！');
            }
        };
    }
    setTimeout(readAll, 1000)
}