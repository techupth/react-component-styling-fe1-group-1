// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export default function Button(props) {
  if (props.type === "primary") {
    return (
      <div>
        <button
          css={css`
            display: block;
            background-color: #074ee8;
            color: white;
            border: none;
            border-radius: 4px;
            padding: 0px 16px;
            height: 50px;
            width: 170px;
            font-size: 16px;
            margin:10px;
          `}
        >
          Button
        </button>
      </div>
    );
  } else if (props.type === "secondary") {
    return (
      <div>
        <button
          css={css`
            display: block;
            background-color: #07A4E8;
            color: white;
            border: none;
            border-radius: 4px;
            padding: 0px 16px;
            height: 50px;
            width: 170px;
            font-size: 16px;
            margin:10px;

          `}
        >
          Button
        </button>
      </div>
    );
  }
}
