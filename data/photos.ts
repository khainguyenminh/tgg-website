// Tự sinh bởi scripts/export-photos.mjs từ data/photo-manifest.json, không sửa tay.
export interface Photo {
  id: string
  src: string
  width: number
  height: number
  blurDataURL: string
  kind: 'guard' | 'lab'
  lettering: string
  color: string
  alt: string
}

export const photos: Photo[] = [
  {
    "id": "raymond",
    "src": "/photos/raymond.jpg",
    "width": 2400,
    "height": 1600,
    "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAALABADASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAQG/8QAHxAAAgEEAgMAAAAAAAAAAAAAAQIDAAQFIRFxEmGx/8QAFAEBAAAAAAAAAAAAAAAAAAAAAf/EABgRAAIDAAAAAAAAAAAAAAAAAAARASEx/9oADAMBAAIRAxEAPwDIYyCyuPNbx5I2G1ZTro6NMnBZQBFs3kkJ2WY6+CoQzIeVJHVCzMeWJJ90uFgWf//Z",
    "kind": "guard",
    "lettering": "RAYMOND",
    "color": "Xanh điện biển",
    "alt": "Mouthguard PRO màu xanh in chữ RAYMOND, đặt trên mặt kính đen"
  },
  {
    "id": "champion-boy",
    "src": "/photos/champion-boy.jpg",
    "width": 2400,
    "height": 1600,
    "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAALABADASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAQQFBv/EACMQAAEDAwQCAwAAAAAAAAAAAAIBAwQAERIFEyExFDJBUnH/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/EABURAQEAAAAAAAAAAAAAAAAAAAEA/9oADAMBAAIRAxEAPwDN6REhyU3Zj7jYIeOIBfLj7X4p3U4ejC074ZyRdbb3EumQlz0vylQ2nnY91ZcNtV7xJUvQOXINCA3jUT9rr3+1KSJf/9k=",
    "kind": "guard",
    "lettering": "CHAMPION BOY",
    "color": "Trắng",
    "alt": "Mouthguard trắng in chữ CHAMPION BOY màu đen"
  },
  {
    "id": "tiboom",
    "src": "/photos/tiboom.jpg",
    "width": 1800,
    "height": 1200,
    "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAALABADASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAQG/8QAIBABAQACAQMFAAAAAAAAAAAAAgEEEQADEiETMUFhsf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFREBAQAAAAAAAAAAAAAAAAAAABH/2gAMAwEAAhEDEQA/AMTijGdZyEj42VPzjMGN0/TOOk7Z3JX4+uTloXZVN1rxeE07O5Vampu+05Cv/9k=",
    "kind": "guard",
    "lettering": "TIBOOM",
    "color": "Đen bóng đêm",
    "alt": "Mouthguard đen in chữ TIBOOM màu trắng"
  },
  {
    "id": "nmt",
    "src": "/photos/nmt.jpg",
    "width": 1800,
    "height": 1200,
    "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAALABADASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAIFBv/EAB8QAAICAgIDAQAAAAAAAAAAAAECAwQAEQUxISJxkf/EABUBAQEAAAAAAAAAAAAAAAAAAAID/8QAGBEAAwEBAAAAAAAAAAAAAAAAABESASH/2gAMAwEAAhEDEQA/AMfxkFKwXS5KYT2r78fOsbk4KFdFSpKZX37NskAfgyeGKnYJGBYsdsScE62yl5KXT//Z",
    "kind": "guard",
    "lettering": "NMT",
    "color": "Cam lửa cháy",
    "alt": "Mouthguard cam in chữ NMT và muay thai"
  },
  {
    "id": "vu-le",
    "src": "/photos/vu-le.jpg",
    "width": 1800,
    "height": 1200,
    "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAALABADASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAEEBv/EAB8QAAICAgIDAQAAAAAAAAAAAAECAwQAEQUSEzJRcf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDH8ZRhvNIstpa/UbBYb3hyNKvUVPDbWdm9gq6AyNHaNuyMVP0YndnO3Yn9wP/Z",
    "kind": "guard",
    "lettering": "VŨ LÊ",
    "color": "Trắng",
    "alt": "Mouthguard trắng in chữ VŨ LÊ kèm cờ Việt Nam"
  },
  {
    "id": "hoang-kha",
    "src": "/photos/hoang-kha.jpg",
    "width": 1800,
    "height": 1200,
    "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAALABADASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAQIEBv/EABsQAAMBAQADAAAAAAAAAAAAAAECAxEABDFC/8QAFAEBAAAAAAAAAAAAAAAAAAAAAf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AMT4onWqpahRc9gbzWacqFJsaKPojN6YcN4D/9k=",
    "kind": "guard",
    "lettering": "HOÀNG KHA",
    "color": "Xanh rừng sâu",
    "alt": "Mouthguard xanh lá in chữ HOÀNG KHA"
  },
  {
    "id": "destinee",
    "src": "/photos/destinee.jpg",
    "width": 1800,
    "height": 1200,
    "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAALABADASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAIDBv/EABoQAQEAAwEBAAAAAAAAAAAAAAIBAAMRIRL/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AMRpRTJ2Kkd9sncbYwHSLWZ59c53IYSZR//Z",
    "kind": "guard",
    "lettering": "Destinee",
    "color": "Xanh điện biển",
    "alt": "Mouthguard xanh dương in chữ Destinee"
  },
  {
    "id": "tiger-kem",
    "src": "/photos/tiger-kem.jpg",
    "width": 1800,
    "height": 1200,
    "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAALABADASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAEEBv/EAB4QAAIBBAMBAAAAAAAAAAAAAAECEQADBCESE0GB/8QAFAEBAAAAAAAAAAAAAAAAAAAAAf/EABcRAAMBAAAAAAAAAAAAAAAAAAABEUH/2gAMAwEAAhEDEQA/AMa7DOzS167wNxizOROyZoeMPIXpvdhQ8g6rG/tTA+0p3Ro1Q//Z",
    "kind": "guard",
    "lettering": "TIGER & KEM",
    "color": "Cam lửa cháy",
    "alt": "Mouthguard cam in chữ TIGER & KEM Muay Thai"
  },
  {
    "id": "kien-cuong",
    "src": "/photos/kien-cuong.jpg",
    "width": 1800,
    "height": 1200,
    "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAALABADASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAgEG/8QAHRAAAgIDAQEBAAAAAAAAAAAAAQIDEQAEEiGRgf/EABQBAQAAAAAAAAAAAAAAAAAAAAH/xAAXEQADAQAAAAAAAAAAAAAAAAAAESFB/9oADAMBAAIRAxEAPwDEayRyycs/Jq7JAH04tyFISoWQP0L8ZTXw4dKNZNgK4sUfPzLvRpHKqooA5Bw0VGf/2Q==",
    "kind": "guard",
    "lettering": "KIÊN CƯỜNG",
    "color": "Đen bóng đêm",
    "alt": "Mouthguard đen in chữ KIÊN CƯỜNG màu cam"
  },
  {
    "id": "thanh-phong",
    "src": "/photos/thanh-phong.jpg",
    "width": 1800,
    "height": 1200,
    "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAALABADASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAgQG/8QAHxAAAgICAgMBAAAAAAAAAAAAAQIDBAAFERIhQWEx/8QAFQEBAQAAAAAAAAAAAAAAAAAAAgP/xAAXEQADAQAAAAAAAAAAAAAAAAAAEUFC/9oADAMBAAIRAxEAPwDM6qvqLMTLenngkAJDIQQ3zg4dvW1dbomvsTTt+szcAD5xk9ABhKGAPj2MWzAWSMKAB19DJ6Q4z//Z",
    "kind": "guard",
    "lettering": "PHẠM THANH PHONG",
    "color": "Vàng kim",
    "alt": "Mouthguard ánh vàng kim in bảng tên PHẠM THANH PHONG"
  },
  {
    "id": "mai-tyson",
    "src": "/photos/mai-tyson.jpg",
    "width": 1800,
    "height": 1200,
    "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAALABADASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAQG/8QAIBAAAgEEAgMBAAAAAAAAAAAAAQIDAAUSIQQRMUFhcf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDJWiC38hnW4PPH4xaPogftLtBboAi8F5nbI5NIR0R8qFNbGqMNE+6D/9k=",
    "kind": "guard",
    "lettering": "Mai Tyson",
    "color": "Trắng",
    "alt": "Mouthguard trắng in chữ viết tay Mai Tyson"
  },
  {
    "id": "dinh-tien",
    "src": "/photos/dinh-tien.jpg",
    "width": 1800,
    "height": 1200,
    "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAALABADASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAMF/8QAHxAAAQQCAwEBAAAAAAAAAAAAAQIDBAUAERIhMVHR/8QAFAEBAAAAAAAAAAAAAAAAAAAAAf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AMGrp69+GXZk5SHB62gDY/cWNPVsV65Eec4XE+NrA7PzJRQFxF8gDpWhiakIrXOI12BgX//Z",
    "kind": "guard",
    "lettering": "ĐÌNH TIẾN",
    "color": "Trắng",
    "alt": "Mouthguard trắng in chữ ĐÌNH TIẾN"
  },
  {
    "id": "nam-quan",
    "src": "/photos/nam-quan.jpg",
    "width": 1800,
    "height": 1200,
    "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAALABADASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUG/8QAHxAAAgICAgMBAAAAAAAAAAAAAQIDBAARBRIUImFx/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDKcVSoXFk8u69ZlI16dgccxSoVEiNK3JZZiexZOoGTUkeM7Riv5h5HkO3YsfpyD//Z",
    "kind": "guard",
    "lettering": "Nam Quân",
    "color": "Bạc hà băng",
    "alt": "Mouthguard xanh bạc hà in chữ Nam Quân"
  },
  {
    "id": "mqh",
    "src": "/photos/mqh.jpg",
    "width": 1800,
    "height": 1200,
    "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAALABADASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABAMG/8QAHxAAAQMFAAMAAAAAAAAAAAAAAgEDBAAFERIhE0FR/8QAFQEBAQAAAAAAAAAAAAAAAAAAAgP/xAAZEQACAwEAAAAAAAAAAAAAAAAAEQECEkH/2gAMAwEAAhEDEQA/AMZb7e7cHDBk2hUE2XyHrylpGl2aU2+hNEveAW3PeUo1tNRlapjBJheVeS6aSxHPEH5Unba4NRln/9k=",
    "kind": "guard",
    "lettering": "M.Q.H",
    "color": "Vàng tia chớp",
    "alt": "Mouthguard vàng in chữ M.Q.H"
  },
  {
    "id": "anh-khiem",
    "src": "/photos/anh-khiem.jpg",
    "width": 1800,
    "height": 1200,
    "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAALABADASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAQG/8QAHhAAAgEEAwEAAAAAAAAAAAAAAQIDAAQREiExYSL/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/EABYRAAMAAAAAAAAAAAAAAAAAAAARIf/aAAwDAQACEQMRAD8AxtncW6Qus0cZdRlCY87eE5pd3ELRqsIjyR9axageDPNRL3Ru6lUXD//Z",
    "kind": "guard",
    "lettering": "ANH KHIÊM",
    "color": "Đen bóng đêm",
    "alt": "Mouthguard đen in chữ ANH KHIÊM ánh vàng"
  },
  {
    "id": "minh-loc",
    "src": "/photos/minh-loc.jpg",
    "width": 1800,
    "height": 1200,
    "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAALABADASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAQG/8QAHxABAAEEAgMBAAAAAAAAAAAAAQIAAwQRITETQVFh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAwDAQACEQMRAD8AxeHDDmXDKnchINwYvD+dNMwxIlsxfIqblKT7+dFS7TpptXmoV//Z",
    "kind": "guard",
    "lettering": "MINH LỘC",
    "color": "Đen bóng đêm",
    "alt": "Mouthguard đen in chữ MINH LỘC"
  },
  {
    "id": "thanh-thuy",
    "src": "/photos/thanh-thuy.jpg",
    "width": 1800,
    "height": 1200,
    "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAALABADASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAEDBv/EAB0QAAIDAAIDAAAAAAAAAAAAAAEDAAIRBDESISL/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AMPxkLcbebqrwb9HuJ6lqNRRwbo04MySBI6MDY2Ps7IP/9k=",
    "kind": "guard",
    "lettering": "THANH THỦY",
    "color": "Đen bóng đêm",
    "alt": "Mouthguard đen in chữ THANH THỦY và hoa sen"
  },
  {
    "id": "tfcmma",
    "src": "/photos/tfcmma.jpg",
    "width": 1800,
    "height": 1200,
    "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAALABADASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAIEBv/EAB4QAAEEAgMBAAAAAAAAAAAAAAIAAQMEETEhQnGh/8QAFAEBAAAAAAAAAAAAAAAAAAAAAv/EABgRAAMBAQAAAAAAAAAAAAAAAAAREiEB/9oADAMBAAIRAxEAPwDG0I6UoyDbkljLqQYdvMJbgU4xYaxSmWeSPDfFKxO2n2h9orR1yUtP/9k=",
    "kind": "guard",
    "lettering": "TFCMMA",
    "color": "Đỏ chiến binh",
    "alt": "Mouthguard đỏ in chữ TFCMMA"
  },
  {
    "id": "kevin",
    "src": "/photos/kevin.jpg",
    "width": 1800,
    "height": 1200,
    "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAALABADASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAQMFBv/EAB4QAAIBBAMBAAAAAAAAAAAAAAECAwAEBRESIWGB/8QAFQEBAQAAAAAAAAAAAAAAAAAAAgP/xAAYEQADAQEAAAAAAAAAAAAAAAAAERIBIf/aAAwDAQACEQMRAD8Ay9kuOJkS9jfY7VkJHym3ceMSNEskZ5G7LMxOvPakFiGJBINDkxOyTujPWyl5KR//2Q==",
    "kind": "guard",
    "lettering": "KEVIN",
    "color": "Cam lửa cháy",
    "alt": "Mouthguard cam in chữ KEVIN và họa tiết răng nanh"
  },
  {
    "id": "my-hoang",
    "src": "/photos/my-hoang.jpg",
    "width": 1800,
    "height": 1200,
    "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAALABADASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAgMFBv/EACEQAAEDBAEFAAAAAAAAAAAAAAECAwQABREhYRMyQUJR/8QAFAEBAAAAAAAAAAAAAAAAAAAAA//EABoRAAICAwAAAAAAAAAAAAAAAAABEjECESH/2gAMAwEAAhEDEQA/AMnbo0CUVNyJDjK/VWsUVwhQYbQ6cpT7hPjGAOcVOZUUr1jf0Zpkk9o0BwKPTlYyeMK6f//Z",
    "kind": "guard",
    "lettering": "MY HOANG",
    "color": "Cam lửa cháy",
    "alt": "Mouthguard cam in chữ MY HOANG"
  },
  {
    "id": "dvn",
    "src": "/photos/dvn.jpg",
    "width": 1800,
    "height": 1200,
    "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAALABADASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAQQG/8QAIBAAAgEEAgMBAAAAAAAAAAAAAgMBAAQRIQUiEjGhsf/EABUBAQEAAAAAAAAAAAAAAAAAAAEC/8QAGBEAAgMAAAAAAAAAAAAAAAAAABEBITH/2gAMAwEAAhEDEQA/AMpZJ4x0yNyxqtaKC1+U3VtxoYG2a1he/KZ1HyKgS01n0LGaWsNhdiziqcLAs//Z",
    "kind": "guard",
    "lettering": "DVN",
    "color": "Xanh hoàng gia",
    "alt": "Mouthguard xanh hoàng gia in chữ DVN"
  },
  {
    "id": "rabbit",
    "src": "/photos/rabbit.jpg",
    "width": 1800,
    "height": 1200,
    "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAALABADASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAEFBv/EACAQAAIBAwQDAAAAAAAAAAAAAAEDAgAFEQQhMpESFCL/xAAUAQEAAAAAAAAAAAAAAAAAAAAB/8QAFhEAAwAAAAAAAAAAAAAAAAAAABEh/9oADAMBAAIRAxEAPwDKW8W5iJDWSbFg4+BG/dK4LtunXD0GObM8izGB1U+EjE4B2NE2SYfo5xQqLh//2Q==",
    "kind": "guard",
    "lettering": "RABBIT",
    "color": "Kim tuyến",
    "alt": "Mouthguard kim tuyến bạc in chữ RABBIT"
  },
  {
    "id": "mikey",
    "src": "/photos/mikey.jpg",
    "width": 1800,
    "height": 1200,
    "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAALABADASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAgMEBv/EAB8QAAICAwACAwAAAAAAAAAAAAECAwQABRESFCExUf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDN0NdU2EsiSXfVKjqs6dDYvZa+rr5kjiuC0SOsyLxRkBleNiUcqfr4OCXeRvJ2LH9JwP/Z",
    "kind": "guard",
    "lettering": "MIKEY",
    "color": "Bạc hà băng",
    "alt": "Mouthguard xanh bạc hà in chữ MIKEY"
  },
  {
    "id": "wave",
    "src": "/photos/wave.jpg",
    "width": 1800,
    "height": 1200,
    "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAALABADASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAQIEBv/EACEQAAEEAQQDAQAAAAAAAAAAAAECAwQRABIhMmEFFCIx/8QAFAEBAAAAAAAAAAAAAAAAAAAAAf/EABgRAAIDAAAAAAAAAAAAAAAAAAARASEx/9oADAMBAAIRAxEAPwDH+NjwpGsTJC2COJAsHrGmMwo+n0pDjqzyJ2A6/MhQ4ts2hRF7GsClqUfo3WLhYFn/2Q==",
    "kind": "guard",
    "lettering": "",
    "color": "Xanh hoàng gia",
    "alt": "Mouthguard xanh hoàng gia vẽ sóng biển và hoa anh đào"
  },
  {
    "id": "wukong-green",
    "src": "/photos/wukong-green.jpg",
    "width": 1800,
    "height": 1200,
    "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAALABADASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAQMEBv/EAB4QAQACAwACAwAAAAAAAAAAAAECBAADIQWREhQx/8QAFAEBAAAAAAAAAAAAAAAAAAAAAv/EABkRAAIDAQAAAAAAAAAAAAAAAAARAiExQf/aAAwDAQACEQMRAD8AyfiKlG18y1ZlomPOgPvGeUrUauo+tYnu2L3oh6yCnJNiDhuTkzIrw/DD0Klro//Z",
    "kind": "guard",
    "lettering": "",
    "color": "Xanh lá chiến thắng",
    "alt": "Mouthguard xanh lá in chữ viết tay màu trắng"
  },
  {
    "id": "ntv",
    "src": "/photos/ntv.jpg",
    "width": 1800,
    "height": 1200,
    "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAALABADASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAQIDBv/EACAQAAIBAwQDAAAAAAAAAAAAAAECAwAREgQTIjEhYbH/xAAUAQEAAAAAAAAAAAAAAAAAAAAB/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AxGkSCR8ZmwHeRaw+Gm1OzG2MXLwCGD3A9dCowkh7ihKeVBf/2Q==",
    "kind": "guard",
    "lettering": "NTV",
    "color": "Đen bóng đêm",
    "alt": "Mouthguard đen in chữ NTV màu trắng"
  },
  {
    "id": "dont-quit",
    "src": "/photos/dont-quit.jpg",
    "width": 1800,
    "height": 1200,
    "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAALABADASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABAMG/8QAIhAAAQMEAAcAAAAAAAAAAAAAAQIDBAAFERIUISMxQWFx/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAwDAQACEQMRAD8Aztmt0F+AuRMmxWVb6hLhJV9xkUO9RY0WQ3wkhl9C0bdInCT7z2oagNTyqXipB//Z",
    "kind": "guard",
    "lettering": "DON'T QUIT",
    "color": "Trắng",
    "alt": "Mouthguard trắng in chữ DON'T QUIT"
  },
  {
    "id": "red-plain",
    "src": "/photos/red-plain.jpg",
    "width": 1800,
    "height": 1200,
    "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAALABADASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAIEBv/EAB0QAAICAgMBAAAAAAAAAAAAAAEDAgQAMRESIWH/xAAUAQEAAAAAAAAAAAAAAAAAAAAC/8QAGREAAgMBAAAAAAAAAAAAAAAAABEBAhIh/9oADAMBAAIRAxEAPwDEUlV3O6WWlUSPJgcgH7j3EVURiEPk6R35wBkmtYEk7wqWOLVyl0//2Q==",
    "kind": "guard",
    "lettering": "",
    "color": "Đỏ chiến binh",
    "alt": "Mouthguard đỏ trơn trên mẫu hàm"
  },
  {
    "id": "orange-plain",
    "src": "/photos/orange-plain.jpg",
    "width": 1800,
    "height": 1200,
    "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAALABADASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAMFBv/EAB4QAAEFAAIDAAAAAAAAAAAAAAEAAgMEEQUhMVKB/8QAFAEBAAAAAAAAAAAAAAAAAAAAA//EABoRAAEFAQAAAAAAAAAAAAAAABIAAQIRIVH/2gAMAwEAAhEDEQA/AMdxlenZkdHbmdD6uBGJvKVKFWNgq2HzyOPfYwD4poJB0HEFxd5OoxcrvErTiFDvV//Z",
    "kind": "guard",
    "lettering": "",
    "color": "Cam lửa cháy",
    "alt": "Mouthguard cam trơn trên mẫu hàm"
  },
  {
    "id": "blue-plain",
    "src": "/photos/blue-plain.jpg",
    "width": 1800,
    "height": 1200,
    "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAALABADASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAQb/xAAdEAACAgIDAQAAAAAAAAAAAAABAgMEADEFERIh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAgP/xAAYEQADAQEAAAAAAAAAAAAAAAAAERIBAv/aAAwDAQACEQMRAD8Ai6fHtcRmWaJPOwx+43uPamis00T+tBD9wpqDG/YB61jdRVjTyoHe8tHMUB60f//Z",
    "kind": "guard",
    "lettering": "",
    "color": "Xanh hoàng gia",
    "alt": "Mouthguard xanh dương trơn"
  },
  {
    "id": "demut",
    "src": "/photos/demut.jpg",
    "width": 1800,
    "height": 1200,
    "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAALABADASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAgMG/8QAHBAAAwACAwEAAAAAAAAAAAAAAQIDADEREhNB/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABYRAQEBAAAAAAAAAAAAAAAAAAARIf/aAAwDAQACEQMRAD8AwkFR7BasVU7IGsdhJKlZdnUfTi8051loSnyD1wXH/9k=",
    "kind": "guard",
    "lettering": "Demut",
    "color": "Đỏ mận rượu",
    "alt": "Mouthguard màu mận in chữ Demut"
  },
  {
    "id": "derek",
    "src": "/photos/derek.jpg",
    "width": 1800,
    "height": 1200,
    "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAALABADASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAQMFBv/EAB8QAAIBBAIDAAAAAAAAAAAAAAECBAADBREhYUJx0f/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDIYiDGn3mtSJYinxZhtT8p+ZxUTGogsz1lXGPIReFHupKuyHasQeqL3HuHbsWPZoP/2Q==",
    "kind": "guard",
    "lettering": "DEREK",
    "color": "Bạc hà băng",
    "alt": "Mouthguard xanh bạc hà in chữ DEREK"
  },
  {
    "id": "game-over",
    "src": "/photos/game-over.jpg",
    "width": 1800,
    "height": 1200,
    "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAALABADASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABQID/8QAIRAAAgAFBAMAAAAAAAAAAAAAAQIAAwQREgUxMkETUaH/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AAdP0KRORplXWiQgNhimRP2NKvQaREypa8zseWSAC3sWMFpMfw823PcWWYpMNzse4g//2Q==",
    "kind": "guard",
    "lettering": "GAME OVER",
    "color": "Trắng",
    "alt": "Mouthguard trắng in chữ GAME OVER đặt trên giá"
  },
  {
    "id": "lab-model-arch",
    "src": "/photos/lab-model-arch.jpg",
    "width": 1800,
    "height": 1200,
    "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAALABADASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAgUG/8QAIRAAAgEEAQUBAAAAAAAAAAAAAQIDAAQFERITFCJBUXH/xAAUAQEAAAAAAAAAAAAAAAAAAAAC/8QAGBEBAAMBAAAAAAAAAAAAAAAAEQABMQL/2gAMAwEAAhEDEQA/AMpY4oZDGySW7crtJNGMsBtdU7jEdjiZJr09O6ZwIo+QJI97FS4WZZBxYj8NKd2d/Ji2vp3QLdjeTJ//2Q==",
    "kind": "lab",
    "lettering": "",
    "color": "",
    "alt": "Mẫu hàm in từ dữ liệu scan 3D"
  },
  {
    "id": "lab-impression",
    "src": "/photos/lab-impression.jpg",
    "width": 1800,
    "height": 1200,
    "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAALABADASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAgX/xAAgEAACAAYDAQEAAAAAAAAAAAABAgADBAUREgYiMSFB/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAXEQEAAwAAAAAAAAAAAAAAAAAAESFB/9oADAMBAAIRAxEAPwCDxmjs1ZKnJc2KTQ3Ri+oIx5A5HTWikEuXbSXmZ7NvsAInUDHLL+GDXfHQDzGYiLOP/9k=",
    "kind": "lab",
    "lettering": "",
    "color": "",
    "alt": "Mẫu thạch cao kèm khay lấy dấu răng"
  },
  {
    "id": "lab-light-clear",
    "src": "/photos/lab-light-clear.jpg",
    "width": 1800,
    "height": 1200,
    "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAALABADASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAwIG/8QAIhAAAQMDAwUAAAAAAAAAAAAAAQIDBQAEERQhMSIjMkGB/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AMvGQzUjbFwXqGnRntrTz9zQykYiOCRqkvLUfFKeBUWW7TgO+OKK7PUB6oP/2Q==",
    "kind": "lab",
    "lettering": "",
    "color": "",
    "alt": "Mouthguard LIGHT trong suốt sau khi ép nhiệt"
  },
  {
    "id": "lab-light-on-model",
    "src": "/photos/lab-light-on-model.jpg",
    "width": 1800,
    "height": 1200,
    "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAALABADASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAgMFBv/EAB4QAAMAAgIDAQAAAAAAAAAAAAECBAARAwUiMmFx/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABcRAAMBAAAAAAAAAAAAAAAAAAARIUH/2gAMAwEAAhEDEQA/AMr1ccdnO/HVW04Hq+ho/uM7CKKTkVJbDQSfJtAAZMDsjbUkH5hB2dtsSTjQ4j//2Q==",
    "kind": "lab",
    "lettering": "",
    "color": "",
    "alt": "Mouthguard LIGHT trong suốt ôm sát mẫu hàm"
  },
  {
    "id": "lab-glove-hold",
    "src": "/photos/lab-glove-hold.jpg",
    "width": 1800,
    "height": 1200,
    "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAALABADASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABQED/8QAHxAAAwACAQUBAAAAAAAAAAAAAQIDBBEABRIhMUGR/8QAFAEBAAAAAAAAAAAAAAAAAAAAAv/EABkRAAMAAwAAAAAAAAAAAAAAAAACEQEhMf/aAAwDAQACEQMRAD8AJFoVyFGVkUhEkgtoufXNr4fT1iqNdWJQvOw2VcbPgj2p+cNWM6vNaLsGmj+ckDrMExrsYEFfhHGnYB86p//Z",
    "kind": "lab",
    "lettering": "",
    "color": "",
    "alt": "Kỹ thuật viên đeo găng cầm mouthguard trong suốt"
  },
  {
    "id": "lab-glove-check",
    "src": "/photos/lab-glove-check.jpg",
    "width": 1800,
    "height": 1200,
    "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAALABADASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAgUG/8QAHhAAAgICAwEBAAAAAAAAAAAAAQIDBAAREiFhMVH/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/EABcRAQADAAAAAAAAAAAAAAAAAAEAAhH/2gAMAwEAAhEDEQA/AM7Wqi2CHtpX4oXBmbQPevvuMx1axEEpSxody1n5D973kmzI7zEsxPI7OHkynakg+ZVXGFjSf//Z",
    "kind": "lab",
    "lettering": "",
    "color": "",
    "alt": "Kỹ thuật viên kiểm tra mép mouthguard trong suốt"
  },
  {
    "id": "lab-glove-pair",
    "src": "/photos/lab-glove-pair.jpg",
    "width": 1800,
    "height": 1200,
    "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAALABADASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABCEFEUESIjKBkf/EABQBAQAAAAAAAAAAAAAAAAAAAAL/xAAXEQEAAwAAAAAAAAAAAAAAAAABAAIh/9oADAMBAAIRAxEAPwCaWeeKVYGmeLp7GLHC7Yzjii36KJQqXCXCqvkhJA+gUm7JfULtmyxdiT7NAg5HG+1JsuMJUNn/2Q==",
    "kind": "lab",
    "lettering": "",
    "color": "",
    "alt": "Hai tay đeo găng nâng mouthguard lên kiểm tra"
  },
  {
    "id": "lab-eva-sheets",
    "src": "/photos/lab-eva-sheets.jpg",
    "width": 1800,
    "height": 1200,
    "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAALABADASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAQMEBv/EACEQAAEEAgICAwAAAAAAAAAAAAECAwQRABIhQQUVIlGB/8QAFAEBAAAAAAAAAAAAAAAAAAAAAv/EABkRAAEFAAAAAAAAAAAAAAAAAAABAhEiQf/aAAwDAQACEQMRAD8Ay8lyTIZbW4QQobHUUCfs13gnIkri/NalNoNgKVeM8XIdTCngL4bZ2RYvU31lCifSk3yUgE/ow2FLcQ//2Q==",
    "kind": "lab",
    "lettering": "",
    "color": "",
    "alt": "Các tấm EVA nhiều màu xếp hình quạt trước hộp vật liệu"
  },
  {
    "id": "lab-crown-arch",
    "src": "/photos/lab-crown-arch.jpg",
    "width": 1800,
    "height": 1200,
    "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAALABADASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAgUG/8QAIhAAAgICAQMFAAAAAAAAAAAAAQMCBQAEERIhURMiMUGB/8QAFAEBAAAAAAAAAAAAAAAAAAAAAv/EABgRAAMBAQAAAAAAAAAAAAAAAAAREiEi/9oADAMBAAIRAxEAPwDKVNYN8tY5hUhXHVIDuSfgDBZ10dULfrt9bWaPbP7B8HKVGuLaTYXMcxLhyPwY7VUFUHQuIEY7EeB47HBWoc8s/9k=",
    "kind": "lab",
    "lettering": "",
    "color": "",
    "alt": "Mẫu hàm có răng sứ do Khai Nguyên Dental Lab chế tác"
  },
  {
    "id": "case-box",
    "src": "/photos/case-box.jpg",
    "width": 1800,
    "height": 1200,
    "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAALABADASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAIEBv/EACIQAAIBAgUFAAAAAAAAAAAAAAECAwAEERIhIkExUmGBof/EABUBAQEAAAAAAAAAAAAAAAAAAAEC/8QAFhEBAQEAAAAAAAAAAAAAAAAAEQAh/9oADAMBAAIRAxEAPwDO2V4Y7eVGSNsxO5+PA0ovC89uz5EQAcDA6fKgPVl4DHAe6RpH7jVOEF//2Q==",
    "kind": "lab",
    "lettering": "",
    "color": "",
    "alt": "Hộp đựng mouthguard có logo The Guard Guy, bên trong là mouthguard đen"
  },
  {
    "id": "lab-black-inner",
    "src": "/photos/lab-black-inner.jpg",
    "width": 1800,
    "height": 1200,
    "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAALABADASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABAAC/8QAIRAAAgIABQUAAAAAAAAAAAAAAQIAAwQFERJhExQhMXH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8APhlyttB2SbubCJX2ZcoPTwVOo9+SYShVasbgD9mb1CoQoAHED//Z",
    "kind": "lab",
    "lettering": "",
    "color": "",
    "alt": "Mặt trong mouthguard đen với dấu răng khớp theo mẫu hàm"
  }
]

export const photo = (id: string): Photo => {
  const p = photos.find((x) => x.id === id)
  if (!p) throw new Error(`Unknown photo: ${id}`)
  return p
}
