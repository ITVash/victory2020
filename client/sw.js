self.addEventListener('push', event => {
  const data = event.data.json()
  const options = {
    body: data.body,
    icon: './icon-192x192.png'
  }
  event.waitUntil(
    self.registration.showNotification(data.title, options)
  );
})

self.addEventListener('notificationclick', e => {
  const url = 'https://pobeda75.online'
  const notifi = e.notification
  //const primaryKey = await notifi.data.primaryKey
  const action = e.action
  if (action === 'close') {
    notifi.close()
  } else {
    clients.openWindow(url);
    notifi.close()
  }
	return clients.openWindow(url);
});
