

## Как вводить изменения в документацию

1. Открываете `Terminal` и переходите в папку где вы хотите чтобы у вас хранились локальные файлы репозитория. Пример команды `cd Desktop/{название папки}`

2. Клонируете репозиторию вводя в terminal `git clone git@github.com:segmentstream-com/segmentstream-com.github.io.git`

3. Открываете IDE, (советую [Visual Studio Code](https://code.visualstudio.com/)) и открываете папку которую клонировали во втором шаге.

4. Нажимаете на клавиатуре `Command + Shift + P` и выбираете в списке Create Branch.
Название Branch должно описывать описывать что в нем будет изменено, в формате `feature/{описание}`. Пример: `feature/fix-ecommerce-checkout-typos`
Branch надо создавать отдельный для больших изменений которые не касаются друг-друга.
Например если вы решили обновить описание объекта product и описание объекта user, то это надо делать в отдельных Branch.

5. Все файлы которые вам надо редактировать находятся в папке `_docs` [скрин](http://take.ms/BvXcF)

6. После редактирования файла вы его сохраняете и переходите в тэб Source Control, тут видны файлы которые в которые вы внесли изменения в этой ветке. [скрин](http://take.ms/PAkrD)

7. Тут надо написать более подробное описание того что было сделано в ветке, нажать на галочку, и потом Yes [скрин](http://take.ms/IpS7EB)

8. Чтобы ваши изменения загрузились в гитхаб надо нажать на облачко и в списке remote выбрать origin [скрин](http://take.ms/CrIGU)

9. Далее надо перейти на страницу репозитория GitHub и там вы должны увидеть такой тэб с названием вашей ветки где надо нажать на зеленую кнопку [скрин](http://take.ms/eUpUX)

10. Вас переведет на страницу где надо добавить дополнительный комментарий к вашим изменениям, выбрать пользователя у которого вы просите модерацию, и наконец отправить запрос [скрин](http://take.ms/QtxOT)

11. После этого Олегу придет оповещение на почту что его попросили модерировать изменения. Он сам их сможет слить в основную ветку, с которой все подгрузится на сайт документации.

12. Для создания новых изменений надо переключить ветку на `master` нажимая на нижный левый угол, и потом на master [скрин](http://take.ms/KYIsa). Потом надо синхронизировать ветку master с веткой master на GitHub кликая на круглые стрелочки [скрин](http://take.ms/1URHX). После этого уже можно создавать новую ветку как описано в шаге 4.

## Как запускать документацию локально

Надо в терминале в корневой папке документации запустить команду:
`bundle exec jekyll server`

## Tips

Сайт пользуется языком Markdown, если надо посмотреть как ваши изменения будут выглядеть в лайве надо нажать `Command + Shift + V`, описание языка ниже

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
