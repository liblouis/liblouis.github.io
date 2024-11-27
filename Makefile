default : liblouis-doc

LIBLOUIS_SRC_DIR := ../liblouis

include $(LIBLOUIS_SRC_DIR)/doc/Makefile.am

LIBLOUIS_DOC_SRC_DIR := $(LIBLOUIS_SRC_DIR)/doc
LIBLOUIS_DOC_COPY_DIR := documentation

LIBLOUIS_DOC_SRC_FILES := $(addprefix $(LIBLOUIS_DOC_SRC_DIR)/,$(filter-out liblouis.txt liblouis.css gnu.css reset.css,$(EXTRA_DIST)))
LIBLOUIS_DOC_COPY_FILES := $(patsubst $(LIBLOUIS_DOC_SRC_DIR)/%,$(LIBLOUIS_DOC_COPY_DIR)/%,$(LIBLOUIS_DOC_SRC_FILES))

.PHONY : liblouis-doc
liblouis-doc : $(LIBLOUIS_DOC_COPY_FILES)
$(LIBLOUIS_DOC_COPY_FILES) : $(LIBLOUIS_DOC_COPY_DIR)/% : $(LIBLOUIS_DOC_SRC_DIR)/%
	mkdir -p $(dir $@)
	cp $< $@
	@case $@ in                                                            \
	*.html)                                                                \
		while true; do                                                     \
			echo "---";                                                    \
			echo "title: Liblouis User's and Programmer's Manual";         \
			echo "---";                                                    \
			break;                                                         \
		done >$@.tmp &&                                                    \
		if grep "<h1" $@ >/dev/null; then                                  \
			echo "<div class=\"top-level-extent\" id=\"Top\">" >>$@.tmp && \
			sed '0,/^<h1 class="top"/d' $@ >>$@.tmp;                       \
		else                                                               \
			sed '0,/^<body/d' $@ >>$@.tmp;                                 \
		fi &&                                                              \
		mv $@.tmp $@;                                                      \
		;;                                                                 \
	*)                                                                     \
	esac

.PHONY : clean
clean :
	rm -f $(filter-out $(LIBLOUIS_DOC_COPY_DIR) $(addprefix $(LIBLOUIS_DOC_COPY_DIR)/,index.md liblouisutdml.html liblouis),\
	                   $(shell find $(LIBLOUIS_DOC_COPY_DIR)))
