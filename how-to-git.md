- aktualizuje bazowego brancha (main)
- tworze nowego brancha i upewniam sie ze na nim jestem (git status, git branch)
- wykonujemy zmiany
- dodajemy zmiany do sledzenia (np. git add .)
- robimy commit z prawidlowym opisem
- pushujemy commita (pamietamy ze za pierwszym razem trzeba ustawic go w repo zdalnym)
- PR: upewniamy ze wrzucilismy to co chcemy wrzucic
- PR: dodajemy revierow
- PR: otwieramy pull requesta

> if okejka

merge

> else if okejka ale konflikt

- na lokalnym branchu pulluje zmiany z bazowego brancha
  (np git pull origin main)
- poprawiamy kod, zostawiamy go bez informacji o konfliktach
- rejestrujemy zmiany i commitujemy
- git push

> else if nie ma okejki tylko komentarz z prosba o poprawe

- odnosimy się do komentarza
- nanosimy ewentualne poprawki na lokalnym branchu
- git commit
- git push
