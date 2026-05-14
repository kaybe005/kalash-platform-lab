// Shim for missing Next.js 16 type declaration
// next/dist/lib/metadata/types/metadata-interface.d.ts is absent from the package
declare module "next/dist/lib/metadata/types/metadata-interface.js" {
  export type ResolvingMetadata = unknown;
  export type ResolvingViewport = unknown;
}

declare module "next/dist/build/segment-config/app/app-segment-config.js" {
  export type InstantConfigForTypeCheckInternal = unknown;
}
