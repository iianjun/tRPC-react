import styles from "../../styles/unsplash/modal.module.scss";

import { SearchOutlined } from "@ant-design/icons";
import { Input, Modal } from "antd";
import Skeleton from "react-loading-skeleton";
import React, { useEffect, useRef, useState } from "react";
import type { VeryBasic } from "unsplash-js/dist/methods/photos/types";
import { createApi } from "unsplash-js";
import { UnsplashModalProps } from "./index.d";
import Draggable, { DraggableData, DraggableEvent } from "react-draggable";
import { useUnsplash } from "../../hooks/use-unsplash";
const api = createApi({
  accessKey: "Z6FiDQqJRLkCTQ6tiW1NKPLZ3iRi1VXG2UlXFnefIbc",
});

const initalBound = {
  left: 0,
  top: 0,
  bottom: 0,
  right: 0,
};
const UnsplashModal: React.FC<UnsplashModalProps> = ({
  onCancel,
  onChangeUrl,
  ...rest
}) => {
  const [bounds, setBounds] = useState(initalBound);
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<VeryBasic[]>([]);
  const draggleRef = useRef<HTMLDivElement>(null);
  const ref = useRef<HTMLDivElement>(null);
  const { getPhotos, loading } = useUnsplash();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const _results = await getPhotos({
      page,
      perPage: 12,
      query,
    });
    setResults(_results);
  };

  const onStart = (_event: DraggableEvent, uiData: DraggableData) => {
    const { clientWidth, clientHeight } = window.document.documentElement;
    const targetRect = draggleRef.current?.getBoundingClientRect();
    if (!targetRect) {
      return;
    }
    setBounds({
      left: -targetRect.left + uiData.x,
      right: clientWidth - (targetRect.right - uiData.x),
      top: -targetRect.top + uiData.y,
      bottom: clientHeight - (targetRect.bottom - uiData.y),
    });
  };

  const onLoadMore = async () => {
    const _results = await getPhotos({
      page: page + 1,
      perPage: 12,
      query,
    });
    setPage((prev) => prev + 1);
    setResults((prev) => [...prev, ..._results]);
  };
  return (
    <Modal
      onCancel={(e) => {
        setBounds(initalBound);
        setQuery("");
        setPage(1);
        onCancel && onCancel(e);
      }}
      {...rest}
      footer={null}
      width={648}
      bodyStyle={{ height: 600 }}
      modalRender={(modal) => (
        <Draggable
          bounds={bounds}
          onStart={(event, uiData) => onStart(event, uiData)}
        >
          <div ref={draggleRef}>{modal}</div>
        </Draggable>
      )}
    >
      <form onSubmit={handleSubmit}>
        <div className={styles.wrapper}>
          <Input
            prefix={<SearchOutlined />}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by keyword"
            value={query}
          />
          <div
            ref={ref}
            className={styles.container}
            onScroll={async () => {
              if (ref.current) {
                const { scrollHeight, scrollTop, clientHeight } = ref.current;
                if (scrollHeight === scrollTop + clientHeight && !loading) {
                  await onLoadMore();
                }
              }
            }}
          >
            {!!results.length &&
              results.map((result) => (
                <span
                  className={styles["img-wrapper"]}
                  onClick={() => onChangeUrl(result.urls.regular)}
                >
                  <img src={result.urls.small} />
                </span>
              ))}
            {loading && (
              <>
                <Skeleton width={290} height={300} />
                <Skeleton width={290} height={300} />
                <Skeleton width={290} height={300} />
                <Skeleton width={290} height={300} />
              </>
            )}
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default UnsplashModal;
