"use client";
import Link from 'next/link';
import css from './TagsMenu.module.css'
import { useState } from 'react';
 
interface TagsMenuProps{
    tags: string[];
}

export default function TagsMenu({ tags }: TagsMenuProps) {
    const [open, setOpen] = useState(false);
    return (
        <div className={css.menuContainer}>
            <button className={css.menuButton}
            onClick={()=> setOpen((prev)=>!prev)}>
    Notes ▾
  </button>
    {open && (<ul className={css.menuList}>
            {tags.map((tag) => (
                <li key={tag} className={css.menuItem}>
                    <Link href={`/notes/filter/${tag}`}
                        className={css.menuLink}>
          {tag}
        </Link>
      </li>))}
    </ul>)}
</div>
)
}

