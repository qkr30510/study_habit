### FileReader or FormData

1. FileReader
FileReader 객체는 웹 애플리케이션이 비동기적으로 데이터를 읽기 위하여 읽을 파일을 가리키는File 혹은 Blob 객체를 이용해 파일의 내용을(혹은 raw data버퍼로) 읽고 사용자의 컴퓨터에 저장하는 것을 가능하게 해줍니다.

File 객체는 <input> 태그를 이용하여 유저가 선택한 파일들의 결과로 반환된 FileList 객체, 드래그 앤 드랍으로 반환된 DataTransfer 객체 혹은 HTMLCanvasElement의 mozGetAsFile() API로 부터 얻습니다.

2. FormData
FormData 인터페이스는 form 필드와 그 값을 나타내는 일련의 key/value 쌍을 쉽게 생성할 수 있는 방법을 제공합니다. 또한 XMLHttpRequest.send() (en-US) 메서드를 사용하여 쉽게 전송할 수 있습니다. 인코딩 타입이 "multipart/form-data"로 설정된 경우, form에서 사용하는 것과 동일한 포맷을 사용해야 합니다.

간단한 GET 전송을 사용하는 경우에는 <form> 이 수행하는 방식으로 쿼리 매개 변수를 생성할 수 있습니다. 이 경우 URLSearchParams 생성자에 직접 전달할 수 있습니다.

FormData 를 구현하는 객체는 entries() 대신 for...of 구조를 직접 사용할 수 있습니다. for (var p of myFormData) 는 for (var p of myFormData.entries()) 와 같습니다.



----
이미지, 영상을 올릴때는 FileReader이고 좀 더 광범위하게 사용할때에는 FormData를 사용하는것 같다. 
즉, 컴퓨터가 이해할 수 있는 언어로 변경해주는듭


