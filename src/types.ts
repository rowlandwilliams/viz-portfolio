interface ModuleImgData {
  default: string;
}

export interface ImgData {
  slug: string;
  module: ModuleImgData;
}

export interface LinkObject {
  underlinedText?: string | undefined;
  link: string;
}
