import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useDropzone } from "react-dropzone";
import { acceptStyle, activeStyle, baseStyle, rejectStyle } from "./styles";
import styles from "../DragOrDrop/DragOrDropImg.module.scss";

export default function DropzoneComponent(props) {
  const [files, setFiles] = useState([]);

  const imageUser = [];

  const onDrop = useCallback((acceptedFiles) => {
    imageUser.push(acceptedFiles);
    setFiles(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );

    if (imageUser.length > 0) {
      props.setAvatarImage(imageUser[0]);
    }
  }, []);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    onDrop,
    accept: "image/jpeg, image/png",
  });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject, isDragAccept]
  );

  const thumbs = files.map((file) => (
    <div key={file.name}>
      <img src={file.preview} alt={file.name} />
    </div>
  ));

  // clean up
  useEffect(
    () => () => {
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  useEffect(() => {
    if (files.length > 0) {
      files.map((file) => props.setAvatar(file.preview));
    }
  }, [files]);

  return (
    <section>
      <>
        <div {...getRootProps({ style })}>
          <input type="file" name="test" {...getInputProps()} />
          <div>Drag and drop your images here.</div>
        </div>
        <aside className={styles.dragImg}>{thumbs}</aside>
      </>
    </section>
  );
}
