# Display all avaliable recipes
help:
    @just --list --unsorted

# Copy the multipage documentation
copy-multipage-docs:
	# copy the html files
    cp ../liblouis/doc/liblouis.html/* documentation/liblouis
	# remove the head of index.html
    for file in `ls documentation/liblouis/index.html`; do \
      sed -i '0,/^<h1 class="top"/d' $file; \
      sed -i '1i\<div class="top-level-extent" id="Top">' $file; \
    done
	# remove the head of all other html files
    for file in `ls documentation/liblouis/*.html | grep -v index.html`; do \
      sed -i '0,/^<body/d' $file; \
    done
	# add the markdown metadata
    for file in `ls documentation/liblouis/*.html`; do \
      sed -i "1i\---\ntitle: Liblouis User's and Programmer's Manual\n---" $file; \
    done

# Serve the website locally
serve:
    jekyll serve
