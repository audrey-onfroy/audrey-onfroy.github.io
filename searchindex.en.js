var relearn_searchindex = [
  {
    "breadcrumb": "",
    "content": "Hello there !\nI am currently research engineer in computational biology.\nI achieved my PhD thesis at Institut Mondor de Recherche Biomédicale (IMRB), in Créteil, France. You can read more about my project here.\n🚧 This page is in construction.\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Integer efficitur augue nec sem tempus euismod. Maecenas et nunc quis lectus pretium semper. Mauris sed elementum arcu. Aenean sit amet urna viverra, volutpat tellus ut, semper nibh. Sed mi magna, imperdiet sed congue in, tempus at turpis. Duis non maximus tortor. Duis at auctor tellus. Mauris commodo ligula at ultrices tristique. Etiam vehicula neque urna, a elementum lorem placerat eu. Quisque quis mauris justo. Fusce dictum elit urna, ut molestie arcu lobortis malesuada. Donec mauris felis, hendrerit id dapibus faucibus, volutpat ac justo. Aliquam eget tincidunt augue, eget dictum nibh. Curabitur laoreet lobortis felis vitae pharetra. Nunc ex turpis, lobortis in lobortis vel, tempor ut leo.\nNulla rutrum iaculis urna at fermentum. Morbi suscipit justo non neque congue, ac varius urna consequat. Nunc gravida lacus vitae interdum egestas. Vestibulum quis ante non est volutpat tempor sed nec erat. Aliquam blandit quam sit amet erat varius eleifend. Suspendisse a mauris erat. In at enim interdum, rutrum diam eu, tempor sem. In et nisi in tellus maximus imperdiet. Morbi ac rutrum leo. Maecenas lacinia ligula metus, quis lacinia diam imperdiet a. Ut sit amet metus accumsan, tempor est sed, ultricies eros. Sed nec massa laoreet, malesuada tellus at, fringilla ligula.\nInteger neque libero, dignissim vel ligula ac, pulvinar tristique libero. Proin semper magna eros, sit amet varius libero lobortis nec. Nunc blandit nisl vel eros mollis commodo. Nullam finibus nibh ut arcu placerat, quis rutrum velit vehicula. Vivamus in tempor lorem. Suspendisse non rhoncus enim. In hac habitasse platea dictumst. Vivamus nec massa at diam elementum placerat id non turpis. Maecenas sit amet feugiat nibh. Suspendisse a ante sed augue hendrerit tristique eleifend vel sapien. Nunc fringilla posuere sapien eu venenatis. Etiam erat erat, pretium eget mi in, blandit fringilla elit. Morbi elementum libero ut purus lobortis vestibulum. Vestibulum id ipsum sed risus pellentesque tempus interdum eget nisl.\nPellentesque placerat sollicitudin euismod. Sed mollis aliquet risus ac auctor. Nulla eleifend nunc enim, et semper lectus finibus vel. Quisque quis ullamcorper augue, et faucibus mauris. Donec elementum purus at nibh varius molestie. Nulla at metus auctor, pharetra dolor in, consequat velit. Proin lacus arcu, volutpat nec condimentum a, dapibus sit amet turpis. Vivamus vitae ligula sed lectus consectetur efficitur. Suspendisse tempus at arcu vel elementum. Aenean fermentum luctus efficitur. Sed id scelerisque libero. Duis commodo dolor sit amet malesuada gravida.\nPhasellus ultricies eros a neque viverra, nec commodo magna maximus. Pellentesque at risus placerat, tempus dolor sit amet, commodo dolor. Nulla et sodales mi, nec vulputate nibh. Proin convallis sapien vitae vulputate feugiat. Sed pretium viverra eleifend. Vestibulum rhoncus congue lacus, eget ultrices libero pellentesque a. Quisque ante eros, bibendum ac condimentum non, interdum vel ex. Maecenas nec massa in dolor ultrices pharetra et sed sapien.\nLast update : 2025-04-05",
    "description": "This is the vignette D",
    "tags": [],
    "title": "Welcome",
    "uri": "/index.html"
  },
  {
    "breadcrumb": "Welcome \u003e  Posts",
    "content": "I planned to build my Github pages since some time… I managed to do it !",
    "description": "I planned to build my Github pages since some time… I managed to do it !",
    "tags": [],
    "title": "Welcome to my GitHub Pages !",
    "uri": "/posts/welcome/index.html"
  },
  {
    "breadcrumb": "Welcome \u003e  Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Bash",
    "uri": "/tags/bash/index.html"
  },
  {
    "breadcrumb": "Welcome \u003e  Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Git",
    "uri": "/tags/git/index.html"
  },
  {
    "breadcrumb": "Welcome \u003e  Codes bash",
    "content": "Source: https://stackoverflow.com/questions/6403601/purging-file-from-git-repo-failed-unable-to-create-new-backup\nFilter the branch to remove the sensitive files/folders (eg. FILE1 and FOLDER1) from history: git filter-branch --index-filter 'git rm -rf --cached --ignore-unmatch FILE1 FOLDER1' HEAD Note: I don’t know how to adapt if there are several branches.\nPush the changes to the branch of interest (eg. main): git push --force --set-upstream origin main From StackOverflow:\nAfter filter-branch, Git keeps refs to the old commits around, in case something goes wrong.\nClean these references (eg, on the branch main): git update-ref -d refs/original/refs/heads/main",
    "description": "Source: https://stackoverflow.com/questions/6403601/purging-file-from-git-repo-failed-unable-to-create-new-backup\nFilter the branch to remove the sensitive files/folders (eg. FILE1 and FOLDER1) from history: git filter-branch --index-filter 'git rm -rf --cached --ignore-unmatch FILE1 FOLDER1' HEAD Note: I don’t know how to adapt if there are several branches.\nPush the changes to the branch of interest (eg. main): git push --force --set-upstream origin main From StackOverflow:\nAfter filter-branch, Git keeps refs to the old commits around, in case something goes wrong.",
    "tags": [
      "Bash",
      "Git"
    ],
    "title": "Remove sensitive files in git history",
    "uri": "/codes/codes_bash/remove_files_git/index.html"
  },
  {
    "breadcrumb": "Welcome",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tags",
    "uri": "/tags/index.html"
  },
  {
    "breadcrumb": "Welcome \u003e  Codes bash",
    "content": "Here is a code to allow the access to all files within a folder foo, in a project BAR, on the cluster, to all members having access to the BAR project:\n#!/usr/bin/bash setfacl -R -m group:BAR:rwx foo",
    "description": "Here is a code to allow the access to all files within a folder foo, in a project BAR, on the cluster, to all members having access to the BAR project:\n#!/usr/bin/bash setfacl -R -m group:BAR:rwx foo",
    "tags": [
      "Bash"
    ],
    "title": "Define symbolic link",
    "uri": "/codes/codes_bash/allow_access/index.html"
  },
  {
    "breadcrumb": "Welcome \u003e  Codes R",
    "content": "Example to remove everything from the environment, except an object called sobj:\n#!/usr/bin/R rm(list = setdiff(ls(), \"sobj\"))",
    "description": "Example to remove everything from the environment, except an object called sobj:\n#!/usr/bin/R rm(list = setdiff(ls(), \"sobj\"))",
    "tags": [
      "R"
    ],
    "title": "Clean R environment but...",
    "uri": "/codes/codes_r/clean_r_env/index.html"
  },
  {
    "breadcrumb": "Welcome \u003e  Codes bash",
    "content": "Code Example to identify all definitions of custom functions in files with the Rmd extension, and to color the names of these functions:\n#!/usr/bin/bash find . -name \"*Rmd\" -type f \\ -exec grep -E ' = function \\(' {} + | grep -vE 'FUN|%' | grep --color -P '(?\u003c=:).*(?= = fun)' Output The output contains several rows with this pattern:\nfilepath/filename.Rmd:function_name = function( ….\nExplanations find . -name \"*Rmd\" -type f: in all files with the Rmd extension in the folders currently (.) accessible… -exec grep -E ' = function \\(' {} +: …, identify all the lines containing = function( grep -vE 'FUN|%': then, remove the lines containing FUN or %. I use this to remove the function that are defined in apply function and in pipes, for instance. grep --color -P '(?\u003c=:).*(?= = func)': then, color the characters between : and = func Related (find) topics:\nFind files containing a specific pattern Apply a function to found files",
    "description": "Code Example to identify all definitions of custom functions in files with the Rmd extension, and to color the names of these functions:\n#!/usr/bin/bash find . -name \"*Rmd\" -type f \\ -exec grep -E ' = function \\(' {} + | grep -vE 'FUN|%' | grep --color -P '(?\u003c=:).*(?= = fun)' Output The output contains several rows with this pattern:\nfilepath/filename.Rmd:function_name = function( ….\nExplanations find . -name \"*Rmd\" -type f: in all files with the Rmd extension in the folders currently (.) accessible… -exec grep -E ' = function \\(' {} +: …, identify all the lines containing = function( grep -vE 'FUN|%': then, remove the lines containing FUN or %. I use this to remove the function that are defined in apply function and in pipes, for instance. grep --color -P '(?\u003c=:).*(?= = func)': then, color the characters between : and = func",
    "tags": [
      "Bash"
    ],
    "title": "Color a specific pattern in the output of `find`",
    "uri": "/codes/codes_bash/find_with_colors/index.html"
  },
  {
    "breadcrumb": "Welcome \u003e  Codes bash",
    "content": "Pretty easy, but I never remember that providing full path is important…\n#!/usr/bin/bash ln -s /full_path/origin/* /full_path/destination",
    "description": "Pretty easy, but I never remember that providing full path is important…\n#!/usr/bin/bash ln -s /full_path/origin/* /full_path/destination",
    "tags": [
      "Bash"
    ],
    "title": "Define symbolic link",
    "uri": "/codes/codes_bash/define_symlinks/index.html"
  },
  {
    "breadcrumb": "Welcome \u003e  Codes bash",
    "content": "Example to find the pattern pattern in all files with Rmd extension, in all the folders currently (.) accessible:\n#!/usr/bin/bash find . -name \"*Rmd\" -type f -exec grep -E 'pattern' {} + Related (find) topics:\nColor the output of find Apply a function to found files",
    "description": "Example to find the pattern pattern in all files with Rmd extension, in all the folders currently (.) accessible:\n#!/usr/bin/bash find . -name \"*Rmd\" -type f -exec grep -E 'pattern' {} + Related (find) topics:\nColor the output of find Apply a function to found files",
    "tags": [
      "Bash"
    ],
    "title": "Find a specific pattern in a bunsh of files",
    "uri": "/codes/codes_bash/find_pattern_files/index.html"
  },
  {
    "breadcrumb": "Welcome \u003e  Codes R",
    "content": "We want to increase the size of the legend keys and split the legend over 3 columns, of a ggplot object called p.\nCode By expliciting the package name:\n#!/usr/bin/R p + ggplot2::guides(color = ggplot2::guide_legend(override.aes = list(size = 5), ncol = 3)) Without the package name:\n#!/usr/bin/R library(ggplot2) p + guides(color = guide_legend(override.aes = list(size = 5), ncol = 3))",
    "description": "We want to increase the size of the legend keys and split the legend over 3 columns, of a ggplot object called p.\nCode By expliciting the package name:\n#!/usr/bin/R p + ggplot2::guides(color = ggplot2::guide_legend(override.aes = list(size = 5), ncol = 3)) Without the package name:\n#!/usr/bin/R library(ggplot2) p + guides(color = guide_legend(override.aes = list(size = 5), ncol = 3))",
    "tags": [
      "R"
    ],
    "title": "Increase the size of the legend keys",
    "uri": "/codes/codes_r/ggplot_guides/index.html"
  },
  {
    "breadcrumb": "Welcome \u003e  Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Html",
    "uri": "/tags/html/index.html"
  },
  {
    "breadcrumb": "Welcome \u003e  Codes R",
    "content": "Code Select all i-th elements of a nested list x, in R language:\n#!/usr/bin/R lapply(x, `[[`, i) This is useful after having used the stringr::str_split function…\nInput Structure of the input list x:\nx ├── A │ ├── A_1 │ ├── A_2 │ ├── A_3 │ └── A_4 ├── B │ ├── B_1 │ ├── B_2 │ ├── B_3 │ └── B_4 └── C ├── C_1 ├── C_2 ├── C_3 └── C_4 Output Structure, after execution of the command (i = 2):\nx ├── A │ └── A_2 ├── B │ └── B_2 └── C └── C_2",
    "description": "Code Select all i-th elements of a nested list x, in R language:\n#!/usr/bin/R lapply(x, `[[`, i) This is useful after having used the stringr::str_split function…\nInput Structure of the input list x:\nx ├── A │ ├── A_1 │ ├── A_2 │ ├── A_3 │ └── A_4 ├── B │ ├── B_1 │ ├── B_2 │ ├── B_3 │ └── B_4 └── C ├── C_1 ├── C_2 ├── C_3 └── C_4 Output Structure, after execution of the command (i = 2):",
    "tags": [
      "R"
    ],
    "title": "Subset the i-th elements of a nested list",
    "uri": "/codes/codes_r/select_ith_element_in_list/index.html"
  },
  {
    "breadcrumb": "Welcome \u003e  Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Md",
    "uri": "/tags/md/index.html"
  },
  {
    "breadcrumb": "Welcome \u003e  Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: R",
    "uri": "/tags/r/index.html"
  },
  {
    "breadcrumb": "Welcome \u003e  Codes bash",
    "content": "Source: https://superuser.com/questions/303559/replace-symbolic-links-with-files\nCode:\n#!/usr/bin/bash set -e for link; do test -h \"$link\" || continue dir=$(dirname \"$link\") reltarget=$(readlink \"$link\") case $reltarget in /*) abstarget=$reltarget;; *) abstarget=$dir/$reltarget;; esac rm -fv \"$link\" cp -afv \"$abstarget\" \"$link\" || { # on failure, restore the symlink rm -rfv \"$link\" ln -sfv \"$reltarget\" \"$link\" } done Usage:\nfind . -type l -exec /path_to/replace_symlinks.sh {} +",
    "description": "Source: https://superuser.com/questions/303559/replace-symbolic-links-with-files\nCode:\n#!/usr/bin/bash set -e for link; do test -h \"$link\" || continue dir=$(dirname \"$link\") reltarget=$(readlink \"$link\") case $reltarget in /*) abstarget=$reltarget;; *) abstarget=$dir/$reltarget;; esac rm -fv \"$link\" cp -afv \"$abstarget\" \"$link\" || { # on failure, restore the symlink rm -rfv \"$link\" ln -sfv \"$reltarget\" \"$link\" } done Usage:\nfind . -type l -exec /path_to/replace_symlinks.sh {} +",
    "tags": [
      "Bash"
    ],
    "title": "Replace symbolic links by the target files",
    "uri": "/codes/codes_bash/replace_symlinks/index.html"
  },
  {
    "breadcrumb": "Welcome \u003e  Tutorials",
    "content": "Context We have a local folder MAIN associated with a GitHub repository, also called MAIN. The structure is as follows:\nMAIN ├── 1_dir_A │ ├── content_AA │ │ ├── file_AAA.ext │ │ └── file_AAB.ext │ └── content_AB │ ├── file_ABA.ext │ ├── file_ABB.ext │ └── file_ABC.ext ├── 2_dir_B │ ├── content_BA │ │ ├── file_BAA.ext │ │ └── file_BAB.ext │ └── content_BB │ ├── file_BBA.ext │ └── file_BBB.ext ├── README.md ├── .git └── .gitignore Goal We want to:\nkeep the structure of MAIN make a new folder TOTO associated with the content of 2_dir_B keep the history of 2_dir_B in the new repository (default) keep the history of 2_dir_B in the main repository define 2_dir_B as a submodule of MAIN Method Make sure that the MAIN repository is up-to-date with your local folder, using git pull and/or git push commands. Duplicate the MAIN repository Clone the MAIN repository to initate the new one: git clone https://github.com/user-name/MAIN.git TOTO Move to TOTO: cd TOTO Get all branches (optional) Get all the branches and tags from the MAIN repository, because they have not been imported using git clone: git branch -a # check the current branches git fetch origin git branch -a # check the current branches (optional) If there are SOME branches to copy, run: git checkout -b SOME origin/SOME git branch -a # check the current branches Detach from origin Detach the local repository TOTO from the MAIN repository. git remote -v # check the remote host: MAIN.git git remote rm origin git remote -v # no more host Subset the new repository Filter the directory to keep only the 2_dir_B folder. We should --force because there is no origin. git filter-repo --path 2_dir_B/ --force Move the 2_dir_B folder content to the root: git mv 2_dir_B/* . git mv 2_dir_B/.gitignore .gitignore # for the hidden files rm -Rf 2_dir_B Add the untracked files from MAIN to TOTO. This step can/should/must be done manually by using the graphical file explorer…\nCheck that TOTO contains everything present in MAIN/2_dir_B:\ndiff -r /path/to/TOTO /path/to/MAIN/2_dir_B Ensure to ignore the folders and files that should not be tracked by the git system: nano .gitignore # fill in manually Define the commit: git status # everything should be added git add * # if necessary, for instance .gitignore git commit -m \"Filter only 2_dir_B content\" Define the new repository On GitHub, create a new empty (no README, no LICENSE) repository, for instance called TITI.\nDefine the new origin for the TOTO folder:\ngit remote add origin https://github.com/username/TITI.git git remote -v # check the remote host Push the changes. We use --force if no file has been changed but only the git history has been filtered. We use --all to include all the branches. git push --force --all origin git push --tags origin # optionally, if there are tags Define a submodule in MAIN Go to the MAIN directory: cd /path/to/MAIN Remove the 2_dir_B folder, both from tracking and locally: git rm -r 2_dir_B rm -Rf 2_dir_B/ (optional) To eventually remove this folder from the history, use git filter-repo. Do not forget --invert-paths. We use --all to apply the filtering on all branches. We use git push --force to force rewriting the history in the remote host. pip install git-filter-repo # installation git filter-repo --path 2_dir_B/ --invert-paths --all git push --force Define 2_dir_B as a submodule of MAIN. It creates a .gitmodules file. git submodule add https://github.com/username/TITI.git 2_dir_B git commit -m \"Define submodule 2_dir_B\" git push origin main # push the .gitmodules file That’s all ! :smile:\nOutput The MAIN directory has not changed:\nMAIN ├── 1_dir_A │ ├── content_AA │ │ ├── file_AAA.ext │ │ └── file_AAB.ext │ └── content_AB │ ├── file_ABA.ext │ ├── file_ABB.ext │ └── file_ABC.ext ├── 2_dir_B │ ├── content_BA │ │ ├── file_BAA.ext │ │ └── file_BAB.ext │ └── content_BB │ ├── file_BBA.ext │ └── file_BBB.ext ├── README.md ├── .git └── .gitignore However, on the MAIN GitHub repository, 2_dir_B points to the last commit synchronized. For instance 2_dir_B @3c8464b.\nThe TOTO folder contains:\nTOTO ├── content_BA │ ├── file_BAA.ext │ └── file_BAB.ext ├── content_BB │ ├── file_BBA.ext │ └── file_BBB.ext ├── .git └── .gitignore On the TITI GitHub repository, there is no trace of the MAIN, but the history of all the tracked files is conserved from their creation in the MAIN repository.\nResources Useful resources:\nhttps://www.smashingmagazine.com/2014/05/moving-git-repository-new-server/ https://graphite.dev/guides/git-filter-repo",
    "description": "Context We have a local folder MAIN associated with a GitHub repository, also called MAIN. The structure is as follows:\nMAIN ├── 1_dir_A │ ├── content_AA │ │ ├── file_AAA.ext │ │ └── file_AAB.ext │ └── content_AB │ ├── file_ABA.ext │ ├── file_ABB.ext │ └── file_ABC.ext ├── 2_dir_B │ ├── content_BA │ │ ├── file_BAA.ext │ │ └── file_BAB.ext │ └── content_BB │ ├── file_BBA.ext │ └── file_BBB.ext ├── README.md ├── .git └── .gitignore Goal We want to:",
    "tags": [
      "Git"
    ],
    "title": "Split a GitHub repository into a main repos and a submodule",
    "uri": "/tutorials/split_repo_submodule_with_history/index.html"
  },
  {
    "breadcrumb": "Welcome \u003e  Codes html/markdown",
    "content": "Code:\n\u003ctable\u003e \u003ctr\u003e \u003ctd\u003e\u003cb style=\"font-size:20px\"\u003eA\u003c/b\u003e\u003c/td\u003e \u003ctd\u003e\u003cb style=\"font-size:20px\"\u003eB\u003c/b\u003e\u003c/td\u003e \u003c/tr\u003e \u003ctr\u003e \u003ctd\u003eC\u003c/td\u003e \u003ctd\u003eD\u003c/td\u003e \u003c/tr\u003e \u003c/table\u003e Output:\nA B C D",
    "description": "Code:\n\u003ctable\u003e \u003ctr\u003e \u003ctd\u003e\u003cb style=\"font-size:20px\"\u003eA\u003c/b\u003e\u003c/td\u003e \u003ctd\u003e\u003cb style=\"font-size:20px\"\u003eB\u003c/b\u003e\u003c/td\u003e \u003c/tr\u003e \u003ctr\u003e \u003ctd\u003eC\u003c/td\u003e \u003ctd\u003eD\u003c/td\u003e \u003c/tr\u003e \u003c/table\u003e Output:\nA B C D",
    "tags": [
      "Md",
      "Html"
    ],
    "title": "Make a table",
    "uri": "/codes/codes_markdown/make_table/index.html"
  },
  {
    "breadcrumb": "Welcome \u003e  Codes bash",
    "content": "#!/usr/bin/bash find -type l -exec bash -c \\ 'ln -f \"$(readlink -m \"$0\")\" \"$0\"' {} \\; Note: I don’t know why I wrote this command… At some point, I may be useful !\nRelated (find) topics:\nFind files containing a specific pattern Color the output of find",
    "description": "#!/usr/bin/bash find -type l -exec bash -c \\ 'ln -f \"$(readlink -m \"$0\")\" \"$0\"' {} \\; Note: I don’t know why I wrote this command… At some point, I may be useful !\nRelated (find) topics:\nFind files containing a specific pattern Color the output of find",
    "tags": [
      "Bash"
    ],
    "title": "Update symbolic links",
    "uri": "/codes/codes_bash/find_update_symlinks/index.html"
  },
  {
    "breadcrumb": "Welcome \u003e  Codes html/markdown",
    "content": "Open in a new tab The follow picture is clickable, to open the HTML file in a browser tab:\nThe code is:\n\u003ca href=\"/html/just_a_page.html\"\u003e \u003cimg src=\"/image/open_in_new_tab.jpg\" alt=\".\" width=\"30vw\"\u003e \u003c/a\u003e Embed the HTML page The code is:\n\u003ciframe width=\"100%\" height=\"2300\" src=\"/html/just_a_page.html\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen\u003e \u003c/iframe\u003e The result is:",
    "description": "Open in a new tab The follow picture is clickable, to open the HTML file in a browser tab:\nThe code is:\n\u003ca href=\"/html/just_a_page.html\"\u003e \u003cimg src=\"/image/open_in_new_tab.jpg\" alt=\".\" width=\"30vw\"\u003e \u003c/a\u003e Embed the HTML page The code is:\n\u003ciframe width=\"100%\" height=\"2300\" src=\"/html/just_a_page.html\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen\u003e \u003c/iframe\u003e The result is:",
    "tags": [
      "Md",
      "Html"
    ],
    "title": "Include an HTML file issued from a R Markdown file",
    "uri": "/codes/codes_markdown/include_html/index.html"
  },
  {
    "breadcrumb": "Welcome \u003e  Tutorials",
    "content": "The content of this page is coming soon 😁\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Integer efficitur augue nec sem tempus euismod. Maecenas et nunc quis lectus pretium semper. Mauris sed elementum arcu. Aenean sit amet urna viverra, volutpat tellus ut, semper nibh. Sed mi magna, imperdiet sed congue in, tempus at turpis. Duis non maximus tortor. Duis at auctor tellus. Mauris commodo ligula at ultrices tristique. Etiam vehicula neque urna, a elementum lorem placerat eu. Quisque quis mauris justo. Fusce dictum elit urna, ut molestie arcu lobortis malesuada. Donec mauris felis, hendrerit id dapibus faucibus, volutpat ac justo. Aliquam eget tincidunt augue, eget dictum nibh. Curabitur laoreet lobortis felis vitae pharetra. Nunc ex turpis, lobortis in lobortis vel, tempor ut leo.\nNulla rutrum iaculis urna at fermentum. Morbi suscipit justo non neque congue, ac varius urna consequat. Nunc gravida lacus vitae interdum egestas. Vestibulum quis ante non est volutpat tempor sed nec erat. Aliquam blandit quam sit amet erat varius eleifend. Suspendisse a mauris erat. In at enim interdum, rutrum diam eu, tempor sem. In et nisi in tellus maximus imperdiet. Morbi ac rutrum leo. Maecenas lacinia ligula metus, quis lacinia diam imperdiet a. Ut sit amet metus accumsan, tempor est sed, ultricies eros. Sed nec massa laoreet, malesuada tellus at, fringilla ligula.",
    "description": "The content of this page is coming soon 😁\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Integer efficitur augue nec sem tempus euismod. Maecenas et nunc quis lectus pretium semper. Mauris sed elementum arcu. Aenean sit amet urna viverra, volutpat tellus ut, semper nibh. Sed mi magna, imperdiet sed congue in, tempus at turpis. Duis non maximus tortor. Duis at auctor tellus. Mauris commodo ligula at ultrices tristique. Etiam vehicula neque urna, a elementum lorem placerat eu. Quisque quis mauris justo. Fusce dictum elit urna, ut molestie arcu lobortis malesuada. Donec mauris felis, hendrerit id dapibus faucibus, volutpat ac justo. Aliquam eget tincidunt augue, eget dictum nibh. Curabitur laoreet lobortis felis vitae pharetra. Nunc ex turpis, lobortis in lobortis vel, tempor ut leo.",
    "tags": [
      "R",
      "Bash"
    ],
    "title": "Access two versions (or more !) of R within R Studio",
    "uri": "/tutorials/two_versions_of_r/index.html"
  }
]
