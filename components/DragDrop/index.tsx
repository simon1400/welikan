import { FC } from 'react'
import Dropzone from 'react-dropzone'

interface DropzoneProps {
  text?: string,
  buttonText: string,
  height: string,
  parrentHeight?: string
}

const DragDrop: FC<DropzoneProps> = ({
  text,
  buttonText,
  height,
  parrentHeight = 'auto'
}) => {
  return (
    <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
      {({getRootProps, getInputProps}) => (
        <div className="dragdrop-sec" style={{height: parrentHeight}}>
          <div {...getRootProps()} style={{height}}>
            <input {...getInputProps()} />
            <div>
              <a href="#" onClick={e => e.preventDefault()} className="button bare">{buttonText}</a>
              {text && <p>{text}</p>}
            </div>
          </div>
        </div>
      )}
    </Dropzone>
  )
}

export default DragDrop