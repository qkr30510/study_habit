## 깃 오류

푸시할때마다 rebase 하라는 문구가 떠서 알아보니
초기 설정을 내가 무시해서 발생한 에러였다.

```git config --unset pull.ff```로 해결

https://mytory.net/2022/01/13/git-fatal-not-possible-to-fast-forward-aborting.html


