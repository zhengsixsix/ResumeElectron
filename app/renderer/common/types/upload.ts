import React from "react";

export interface TSUploadInput {
    style?: React.CSSProperties;
    accept?: string;
    multiple?: boolean;
    visible?: boolean;
    onAfterClick?: () => void;
    onAfterChange?: () => void
}
export interface TSUploadFile {
    uuid: string;
    file: any;
    fileType: string;
    base64URL: string;
    revokeFileBase64URL: (base64URL: string) => void;
    upload?: () => void
    cancel?: () => void
    retry?: () => void
}
