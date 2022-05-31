# coding
admin@admin-PC MINGW64 ~
$ ls
 AppData/                                                                                       PrintHood@
'Application Data'@                                                                             Recent@
 Contacts/                                                                                     'Saved Games'/
 Cookies@                                                                                       Searches/
 Desktop/                                                                                       SendTo@
 Documents/                                                                                    'Start Menu'@
 Downloads/                                                                                     Templates@
 Favorites/                                                                                     Videos/
 Links/                                                                                         gitbash/
'Local Settings'@                                                                               guddu/
 Music/                                                                                         ntuser.dat
'My Documents'@                                                                                 ntuser.dat.LOG1
 NTUSER.DAT{016888bd-6c6f-11de-8d1d-001e0bcde3ec}.TM.blf                                        ntuser.dat.LOG2
 NTUSER.DAT{016888bd-6c6f-11de-8d1d-001e0bcde3ec}.TMContainer00000000000000000001.regtrans-ms   ntuser.dat{80bb42e9-6bd6-11ec-958b-e4d53df56ff4}.TM.blf
 NTUSER.DAT{016888bd-6c6f-11de-8d1d-001e0bcde3ec}.TMContainer00000000000000000002.regtrans-ms   ntuser.dat{80bb42e9-6bd6-11ec-958b-e4d53df56ff4}.TMContainer00000000000000000001.regtrans-ms
 NetHood@                                                                                       ntuser.dat{80bb42e9-6bd6-11ec-958b-e4d53df56ff4}.TMContainer00000000000000000002.regtrans-ms
 Pictures/                                                                                      ntuser.ini

admin@admin-PC MINGW64 ~
$ cd desktop

admin@admin-PC MINGW64 ~/desktop
$ mkdir assignment

admin@admin-PC MINGW64 ~/desktop
$ cd assignment

admin@admin-PC MINGW64 ~/desktop/assignment
$ mkdir source

admin@admin-PC MINGW64 ~/desktop/assignment
$ git clone https://github.com/meenakshiar/coding.git
Cloning into 'coding'...
remote: Enumerating objects: 3, done.
remote: Counting objects: 100% (3/3), done.
remote: Total 3 (delta 0), reused 0 (delta 0), pack-reused 0
Receiving objects: 100% (3/3), done.

admin@admin-PC MINGW64 ~/desktop/assignment
$ ls
coding/  source/

admin@admin-PC MINGW64 ~/desktop/assignment
$ cd coding

admin@admin-PC MINGW64 ~/desktop/assignment/coding (main)
$ ls
README.md

admin@admin-PC MINGW64 ~/desktop/assignment/coding (main)
$ git status
On branch main
Your branch is up to date with 'origin/main'.

nothing to commit, working tree clean

admin@admin-PC MINGW64 ~/desktop/assignment/coding (main)
$ pwd
/c/Users/admin/desktop/assignment/coding

admin@admin-PC MINGW64 ~/desktop/assignment/coding (main)
$ cat .git
cat: .git: Is a directory

admin@admin-PC MINGW64 ~/desktop/assignment/coding (main)
$ cd .git

admin@admin-PC MINGW64 ~/desktop/assignment/coding/.git (GIT_DIR!)
$ git status
fatal: this operation must be run in a work tree

admin@admin-PC MINGW64 ~/desktop/assignment/coding/.git (GIT_DIR!)
$ cd ..

admin@admin-PC MINGW64 ~/desktop/assignment/coding (main)
$ git status
On branch main
Your branch is up to date with 'origin/main'.

nothing to commit, working tree clean

admin@admin-PC MINGW64 ~/desktop/assignment/coding (main)
$ touch dummy.txt

admin@admin-PC MINGW64 ~/desktop/assignment/coding (main)
$ ls
README.md  dummy.txt

admin@admin-PC MINGW64 ~/desktop/assignment/coding (main)
$ git status
On branch main
Your branch is up to date with 'origin/main'.

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        dummy.txt

nothing added to commit but untracked files present (use "git add" to track)

admin@admin-PC MINGW64 ~/desktop/assignment/coding (main)
$ git add
Nothing specified, nothing added.
hint: Maybe you wanted to say 'git add .'?
hint: Turn this message off by running
hint: "git config advice.addEmptyPathspec false"

admin@admin-PC MINGW64 ~/desktop/assignment/coding (main)
$ git checkout -b file
Switched to a new branch 'file'

admin@admin-PC MINGW64 ~/desktop/assignment/coding (file)
$ git checkout -b file2
Switched to a new branch 'file2'

admin@admin-PC MINGW64 ~/desktop/assignment/coding (file2)
$ git branch
  file
* file2
  main

admin@admin-PC MINGW64 ~/desktop/assignment/coding (file2)
$ git branch -a
  file
* file2
  main
  remotes/origin/HEAD -> origin/main
  remotes/origin/main

admin@admin-PC MINGW64 ~/desktop/assignment/coding (file2)
$ git checkout

admin@admin-PC MINGW64 ~/desktop/assignment/coding (file2)
$ git checkout file2
Already on 'file2'

admin@admin-PC MINGW64 ~/desktop/assignment/coding (file2)
$ git checkout file
Switched to branch 'file'

admin@admin-PC MINGW64 ~/desktop/assignment/coding (file)
$ history
    1  ls
    2  cd documents
    3  ls
    4  clear
    5  cd
    6  ls
    7  cd desktop
    8  cd
    9  cd bootcamp
   10  cd deskto
   11  cd desktop
   12  bootcamp
   13  cd bootcam
   14  cd bootcamp
   15  ls
   16  clear
   17  cd
   18  cd bootcamp
   19  ls
   20  cd desktop
   21  cd bootcamp
   22  ls
   23  cd recorded classes
   24  pwd
   25  ../..
   26  ../..
   27  cd "recorded classes"
   28  ls
   29  pwd
   30  clear
   31  clear
   32  cd
   33  ls
   34  mkdir guddu
   35  cd
   36  mkdir gitbash
   37  ls
   38  documents
   39  cd
   40  cd desktop
   41  cd bootcamp
   42  mkdir gitbashpractice
   43  rmdir gitbashractice
   44  cd gitbashpractice
   45  mkdir dummy
   46  cd dummy
   47  rm --help
   48  cat 123 net prob byju
   49  cat 123.txt
   50  cat > 456.txt
   51  cat 456.txt
   52  cat >> 456.txt
   53  cat 456.txt
   54  cat > 789.txt
   55  touch >78901.txt
   56  touch 78901.jpeg
   57  cat 123.txt 456.txt
   58  cmd
   59  ls
   60  cd desktop
   61  mkdir assignment
   62  cd assignment
   63  mkdir source
   64  git clone https://github.com/meenakshiar/coding.git
   65  ls
   66  cd coding
   67  ls
   68  git status
   69  pwd
   70  cat .git
   71  cd .git
   72  git status
   73  cd ..
   74  git status
   75  touch dummy.txt
   76  ls
   77  git status
   78  git add
   79  git checkout -b file
   80  git checkout -b file2
   81  git branch
   82  git branch -a
   83  git checkout
   84  git checkout file2
   85  git checkout file
   86  history

admin@admin-PC MINGW64 ~/desktop/assignment/coding (file)
$
