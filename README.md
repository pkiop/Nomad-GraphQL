# Nomad-GraphQL

## GraphQL Query

fetch로 POST에 query담아 보내면 됨
Apollo를 통해 이런식으로 안해도 됨

GraphQL yoga + Apollo-boost

설정 직접해도 되지만 CRA처럼 알아서 해주는 것 
서버 쪽 다 해둔 것 : Yoga
FE쪽 다 해둔 것 : Apollo boost

## Cache 

Awesome! 
한번 받은 것 저장해둠 (loading이 안뜸 )

## Optional Chaining

data && data.movie && data.movie.cover_image
=>
data?.movie?.cover_image

## Localstate

API에서 받아온 것 직접 수정
backend에 것과 같이 쓰는데 @client라고 명시해서 client에서 만든 것이라 알려줌
mutation도 client껀 client에서 정의 