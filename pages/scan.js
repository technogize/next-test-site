import {useRef, useEffect, useState} from 'react'
import QrScanner from 'qr-scanner'
import styles from '../styles/Scan.module.css'

const scan = () => {
    const videoElem = useRef()
    const [qrCodeData, setQrCodeData] = useState(null)
    
    useEffect(() => {
        const qrScanner = new QrScanner(
            videoElem.current,
            result => {
                setQrCodeData(result)
            }
        )
    
        qrScanner.start()

        return () => {
            // On unmount...
            qrScanner.stop() // stop camera
        }
    }, [])
    return (
        <div>
            <p>Please allow access to your device camera to be able to scan.</p>
            <p>QR Code text data here: <strong className={styles.codeData}>{qrCodeData}</strong></p>
            <video ref={videoElem} className={styles.scannerVideo}></video>
        </div>
    )
}

export default scan
