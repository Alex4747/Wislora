# Wishlist

Local first Expo app for collecting things you'd love to buy.

## Start

```bash
npm install
npx expo start
```

Launch an Android Emulator from Android Studio's Device Manager, then press `a` in the Expo terminal (or run `npm run android`). For iPhone, install Expo Go and scan the QR code; the PC and iPhone should be on the same network. If LAN discovery is unavailable, run `npx expo start --tunnel`.

Use `npm run typecheck` to check TypeScript. A few editable demo wishes are added the first time the app opens. Items and preferences are stored locally on the device.

## Notes

The notifications switch currently saves a preference only; notification permissions and scheduling are not implemented. Expo Go supports the selected Expo SDK libraries; native build customization is not required.
