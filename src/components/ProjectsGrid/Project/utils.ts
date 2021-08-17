export const importAllImages = (
  r: __WebpackModuleApi.RequireContext,
  fileExtension: string
) =>
  r.keys().map((fileName: string) => ({
    slug: fileName.substr(2).replace(fileExtension, ""),
    module: r(fileName),
  }));
