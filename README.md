
## How to edit documentation

1. Open `Terminal` and navigate to the folder where you want the local repository files to be stored. For example `cd Desktop/{folder name}`.

2. Clone the repository by executing `git clone git@github.com:segmentstream-com/segmentstream-com.github.io.git` in the terminal.

3. Open your IDE, (for example [Visual Studio Code](https://code.visualstudio.com/)) and open the folder that you've cloned in the previous step.

4. Press `Command + Shift + P` and select Create Branch in the list.
The name of the branch should describe the changes that you want to make in the following format `feature/{description}`. For example: `feature/fix-ecommerce-checkout-page-typos`
Separate branches should be created for every unrelated change.
For example, if you want to make changes in the page describing the product object, and in another page describing the user object, you should create two separate branched.

5. All the files that you have to edit are inside the `_docs` folder. [pic](http://take.ms/BvXcF)

6. After editing a file switch to the Source Control tag, there you can see all the filed that you've edited in the current branch. [pic](http://take.ms/PAkrD)

7. Here you have to type a detailed description of what was edited in your branch, click on the checkmark, and click yes in the dialog box. [pic](http://take.ms/IpS7EB)

8. To upload your changes to GitHub you have to click on the cloud icon and select origin tin the remote list. [pic](http://take.ms/CrIGU)

9. Go to the repositories GitHub page where you should see the "Your recently pushed branches" list. Click on the "Compare & pull request" button. [pic](http://take.ms/eUpUX)

10. You will be redirected to a page where you can write an additional comment to the changes you made, click on the "Reviewers" button on the right and select the users who you want the changes to be reviewed by, and finally click "Create pull request".

11. At this point the users whose review you have requested will receive an email notification. Once they review and approve the changes they can merge the changes to the master branch, which will automatically deploy the changes to the documentation website.

12. To create new changes you have to switch to the master branch by clicking the branch name in the lower left corner, and select master in the branch list - [pic](http://take.ms/KYIsa). Next you have to synchronize your master branch with the GitHub master branch by clicking on the circular arrows [pic](http://take.ms/1URHX). Now you can create a new branch as described in step 4.

## How to load the documentation locally.

Execute the following command in the root documentation folder:
`bundle exec jekyll server`

## Tips

The documentation is using the Markdown language, to get a preview of your changes press `Command + Shift + V`.

### Markdown

Markdown is a lightweight and easy-to-use syntax for styling your writing. It includes conventions for

```markdown
Syntax highlighted code block

# Header 1
## Header 2
### Header 3

- Bulleted
- List

1. Numbered
2. List

**Bold** and _Italic_ and `Code` text

[Link](url) and ![Image](src)
```

For more details see [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/).

## Welcome to GitHub Pages

You can use the [editor on GitHub](https://github.com/segmentstream-com/segmentstream-com.github.io/edit/master/README.md) to maintain and preview the content for your website in Markdown files.

Whenever you commit to this repository, GitHub Pages will run [Jekyll](https://jekyllrb.com/) to rebuild the pages in your site, from the content in your Markdown files.

### Jekyll Themes

Your Pages site will use the layout and styles from the Jekyll theme you have selected in your [repository settings](https://github.com/segmentstream-com/segmentstream-com.github.io/settings). The name of this theme is saved in the Jekyll `_config.yml` configuration file.

### Support or Contact

Having trouble with Pages? Check out our [documentation](https://help.github.com/categories/github-pages-basics/) or [contact support](https://github.com/contact) and we’ll help you sort it out.
