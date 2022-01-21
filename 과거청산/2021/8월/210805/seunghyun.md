# 검은사막 연구소 클론 프로젝트

## 주소

- [주소링크](https://github.com/ddock4you/clone-blackdesert-lab)

## 작업한 내용

- 이미지를 백단에 전송하기 위해 formData 객체를 ajax를 사용하여 백단에 전달했으나 막상 백단에선 빈 객체만 들어오는 상황
- response 헤더를 ontent-Type": "multipart/form-data 으로 바꿔도 백단에 전달 X
- bodyParser가 백단으로 formData 전달을 막고 있는 건 아닌지 추측
- 내일 다시 확인해보는 걸로
